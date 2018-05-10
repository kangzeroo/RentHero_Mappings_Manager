const fs = require('fs')
const axios = require('axios')
const auth_token = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_api_key').auth_token
const PROJECT_ID = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_profile').PROJECT_ID
const header = {
  headers: {
    'Authorization': `Bearer ${auth_token}`
  }
}

const downloadIntentsFromAgent = () => {
  console.log('===> Downloading Intents From A DialogFlow Agent')
  console.log('--> '+PROJECT_ID)
  axios.get(`https://dialogflow.googleapis.com/v2/projects/${PROJECT_ID}/agent/intents?pageSize=1000`, header)
    .then((data) => {
      console.log('Got some intents..')
      fs.writeFile(`./api/dialogflow_intent_ripper/${process.env.NODE_ENV}/intents/meta/intents.json`, JSON.stringify(data.data), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('---> Saved the summary of intents')
      })
      const list = { intents: data.data.intents.map(int => int.displayName) }
      fs.writeFile(`./api/dialogflow_intent_ripper/${process.env.NODE_ENV}/intents/meta/intent_list.json`, JSON.stringify(list), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('---> Saved the listed intents')
      })
      const intents = data.data.intents.map((int) => {
        const id = int.name.slice(
          int.name.indexOf('/intents/') + '/intents/'.length
        )
        console.log(id)
        return axios.get(`https://dialogflow.googleapis.com/v2/projects/${PROJECT_ID}/agent/intents/${id}`, header)
                .then((data) => {
                  console.log(data.data)
                  fs.writeFile(`./api/dialogflow_intent_ripper/${process.env.NODE_ENV}/intents/${int.displayName}.json`, JSON.stringify(data.data), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    return Promise.resolve(int.displayName)
                  })
                })
                .catch((err) => {
                  console.log(err.response.data)
                  return Promise.reject(err)
                })
      })
      return Promise.all(intents)
    })
    .then((data) => {
      console.log(data)
      console.log(data.length)
      console.log('---> Finished downloading intents')
    })
    .catch((err) => {
      console.log(err.response.data)
      console.log('---> Error downloading intents')
    })
}

const uploadIntentsToAgent = () => {
  console.log('===> Uploading Intents to a DialogFlow Agent')
  console.log(`--> Operating in ${process.env.NODE_ENV}`)
  console.log('--> '+PROJECT_ID)
  let prevEnv = 'development'
  if (process.env.NODE_ENV === 'production') {
    prevEnv = 'staging'
  }
  console.log(`From ${process.env.NODE_ENV} to ${prevEnv}...`)
  const listOfIntents = require(`./${prevEnv}/intents/meta/intent_list.json`)
  const x = listOfIntents.intents.map((intentName) => {
    let intent = require(`./development/intents/${intentName}.json`)
    intent.name = null
    return axios.post(`https://dialogflow.googleapis.com/v2/projects/${PROJECT_ID}/agent/intents`, intent, header)
      .then((data) => {
        console.log(data.data)
        return Promise.resolve(data.data)
      })
      .catch((err) => {
        console.log(err.response.data)
        return Promise.reject(err)
      })
  })
  Promise.all(x)
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}


exports.downloadIntentsFromAgent = downloadIntentsFromAgent
exports.uploadIntentsToAgent = uploadIntentsToAgent
