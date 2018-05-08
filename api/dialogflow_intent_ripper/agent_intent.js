const fs = require('fs')
const axios = require('axios')
const auth_token = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_api_key').auth_token
const PROJECT_ID = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_profile').PROJECT_ID

const downloadIntentsFromAgent = () => {
  const header = {
    headers: {
      'Authorization': `Bearer ${auth_token}`
    }
  }
  console.log('===> Downloading Intents From A DialogFlow Agent')
  console.log('--> '+PROJECT_ID)
  axios.get(`https://dialogflow.googleapis.com/v2/projects/${PROJECT_ID}/agent/intents`, header)
    .then((data) => {
      const intents = data.data
      console.log(intents)
      console.log("Got the intents!")
      fs.writeFile(`./api/dialogflow_intent_ripper/${process.env.NODE_ENV}/intents.json`, JSON.stringify(intents), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The intents were saved!")
        console.log("---> Finished")
      })
    })
    .catch((err) => {
      console.log(err.response.data)
    })
}

exports.downloadIntentsFromAgent = downloadIntentsFromAgent
