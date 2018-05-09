const fs = require('fs')
const axios = require('axios')
const PROJECT_ID = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_profile').PROJECT_ID
const auth_token = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_api_key').auth_token

const generateDomainTemplates = () => {
  console.log('====> Generating template domains')
  console.log(`Operating in ${process.env.NODE_ENV} on PROJECT#${PROJECT_ID}`)
  const header = {
    headers: {
      'Authorization': `Bearer ${auth_token}`
    }
  }
  axios.get(`https://dialogflow.googleapis.com/v2/projects/${PROJECT_ID}/agent/intents`, header)
    .then((data) => {
      console.log('Got the agent intents!')
      const domains = [
        'SPEC_UNSTRUC',
        'SPEC_STRUC',
        'GEO',
        'HUMAN',
        'META',
        'SEARCHING',
        'TOURS',
        'GENERAL'
      ]
      domains.forEach((dom) => {
        let x = {
          domain_prefix: `${dom}`,
          relationships: data.data.intents.filter((int) => {
            return int.displayName.indexOf(dom) > -1
          }).map((int) => {
            return {
              dialogFlow_intentName: int.displayName,
              dialogFlow_intentID: int.name,
              endpoint: ''
            }
          })
        }
        fs.writeFile(`./api/knowledge_domains/${process.env.NODE_ENV}/templates/${dom.toLowerCase()}.json`, JSON.stringify(x), function(err) {
          if(err) {
              return console.log(err);
          }
          console.log(`---> Saved the template of ${dom} dialogflow domains`)
        })
      })
    })
    .catch((err) => {
      console.log(err)
      console.log('---> Error creating the templates')
    })
}

exports.generateDomainTemplates = generateDomainTemplates
