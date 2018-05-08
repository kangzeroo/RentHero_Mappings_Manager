const axios = require('axios')
const auth_token = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_api_key').auth_token
const dialogflow_sql_match_map = require('./js/dialogflow_sql_match_map').dialogflow_sql_match_map
const projectID = 'renthero-landlord-ai'
const form_id = 'f2E1MJ'

const testValidityOfMappings = () => {
  let tests = {
    form_ids_match: false,
    all_dialog_intents_exist: false,
    all_intents_match_typeform_tags: false,
  }
  console.log('\n \n \n')
  console.log('=======> BEGINNING TESTS')
  console.log('\n \n')
  testDialogIntentsExist()
    .then(() => {
      tests.all_intents_match_typeform_tags = true
      console.log('\n \n')
      console.log('=======> ALL TESTS PASSED!')
    })
    .catch((err) => {
      console.log('\n \n')
      console.log('=======> SOME TESTS FAILED!')
      console.log(err)
    })
}

const testDialogIntentsExist = () => {
  console.log('=======> TEST 1: Testing that all Intents in our dialogflow_sql_match_map matches official DialogFlow intents')
  const headers = {
    headers: {
      "Authorization": `Bearer ${auth_token}`,
      "Content-Type": 'application/json'
    }
  }
  const p = new Promise((res, rej) => {
    axios.get(`https://dialogflow.googleapis.com/v2/projects/${projectID}/agent/intents`, headers)
      .then((data) => {
        // res(data.data)
        let allExist = true
        const allIntents = data.data.intents
        dialogflow_sql_match_map.relationships.forEach((rel) => {
          let exists = false
          allIntents.forEach((int) => {
            if (int.displayName === rel.dialogFlow_intentName && int.name === rel.dialogFlow_intentID) {
              exists = true
            }
          })
          if (!exists) {
            console.log(`--> TEST 2 FAILED: Our SQL mapping with IntentID#${rel.dialogFlow_intentName} did not find a match with DialogFlow's records.`)
            allExist = false
          } else {
            console.log(`--> TEST 2 PASSED: Our SQL mapping with IntentID#${rel.dialogFlow_intentName} found a match with DialogFlow's records.`)
          }
        })
        console.log(`=======> TEST PASSED? : ${allExist}`)
        if (allExist) {
          res(allExist)
        } else {
          rej('Some of your intents in your mapping did not match an official DialogFlow intent. Check for typos in the dialogFlow_intentID or dialogFlow_intentName')
        }
      })
      .catch((err) => {
        rej(err.response.data)
      })
  })
  return p
}


testValidityOfMappings()


// // List All Intents
//
// curl -X GET \
// https://dialogflow.googleapis.com/v2/projects/renthero-landlord-ai/agent/intents \
// -H 'Authorization: Bearer ya29.GlutBSLCwzLkVdipt3nQpDtrRvGtx5VuO8-EfRFV_n28XZ0od7w_uZeb6RCgCJo99Nl8QoHj7yIhHmAa99Ewb838xqHghlp5RnobnGVbn9PCWAOQw9kkBb6Vexd2' \
// -H 'Content-Type: application/json'
