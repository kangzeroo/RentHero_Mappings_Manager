const axios = require('axios')
const auth_token = require('../../creds/dialogflow_api_key').auth_token
const basic_elastic_dialog_map = require('./js/basic_elastic_dialog_map').basic_elastic_dialog_map
const basic_typeform_elastic_map = require('./js/basic_typeform_elastic_map').basic_typeform_elastic_map
const projectID = 'dev-landlordai'
const form_id = 'xvmqm2'

const testValidityOfMappings = () => {
  let tests = {
    form_ids_match: false,
    all_dialog_intents_exist: false,
    all_intents_match_typeform_tags: false,
  }
  console.log('\n \n \n')
  console.log('=======> BEGINNING TESTS')
  console.log('\n \n')
  testFormIdsMatch()
    .then((data) => {
      tests.form_ids_match = true
      console.log('\n \n')
      return testDialogIntentsExist()
    })
    .then(() => {
      tests.all_dialog_intents_exist = true
      console.log('\n \n')
      return testAllIntentsMatchTypeformTags()
    })
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

const testFormIdsMatch = () => {
  const p = new Promise((res, rej) => {
    console.log('=======> TEST 1: Testing that both our mappings have the same Typeform form_id (basic_elastic_dialog_map and basic_typeform_elastic_map)')
    console.log(`basic_elastic_dialog_map.form_id = ${basic_elastic_dialog_map.form_id}, basic_typeform_elastic_map.form_id = ${basic_typeform_elastic_map.form_id}, actual form_id = ${form_id}`)
    const result = (basic_elastic_dialog_map.form_id === basic_typeform_elastic_map.form_id) && (basic_elastic_dialog_map.form_id === form_id)
    if (result) {
      console.log(`=======> TEST 1 PASSED: ${result}`)
      res(result)
    } else {
      console.log(`=======> TEST 1 FAILED: ${result}`)
      rej('The mappings you made did not have matching form_ids. Check basic_typeform_elastic_map.js and basic_elastic_dialog_map.js')
    }
  })
  return p
}

const testDialogIntentsExist = () => {
  console.log('=======> TEST 2: Testing that all Intents in our basic_elastic_dialog_map match official DialogFlow intents')
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
        basic_elastic_dialog_map.relationships.forEach((rel) => {
          let exists = false
          allIntents.forEach((int) => {
            if (int.displayName === rel.dialogFlow_intentName && int.name === rel.dialogFlow_intentID) {
              exists = true
            }
          })
          if (!exists) {
            console.log(`--> TEST 2 FAILED: Our mapping with IntentID#${rel.dialogFlow_intentName} did not find a match with DialogFlow's records.`)
            allExist = false
          } else {
            console.log(`--> TEST 2 PASSED: Our mapping with IntentID#${rel.dialogFlow_intentName} found a match with DialogFlow's records.`)
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

const testAllIntentsMatchTypeformTags = () => {
  console.log('=======> TEST 3: Testing that all Intents in our basic_elastic_dialog_map has an intent tag_id that matches basic_typeform_elastic_map question tag_ids')
  let allMatched = true
  basic_elastic_dialog_map.relationships.forEach((rel) => {
    let foundMatch = false
    basic_typeform_elastic_map.questions.forEach((qs) => {
      if (qs.tag_ids[0] === rel.typeForm_Tags[0]) {
        foundMatch = true
      }
    })
    if (!foundMatch) {
      console.log(`--> TEST FAILED: Our mapping with IntentID#${rel.dialogFlow_intentName} and tag_id#${rel.typeForm_Tags[0]} did not find a match with Typeform's questions.`)
      allMatched = false
    } else {
      console.log(`--> TEST PASSED: Our mapping with IntentID#${rel.dialogFlow_intentName} and tag_id#${rel.typeForm_Tags[0]} found a match with Typeform's questions.`)
    }
  })
  console.log(`=======> TEST PASSED? : ${allMatched}`)
  if (allMatched) {
    return Promise.resolve(allMatched)
  } else {
    return Promise.reject('Some of your intents tag_ids did not match typeform tag_ids')
  }
}

testValidityOfMappings()


// // List All Intents
//
// curl -X GET \
// https://dialogflow.googleapis.com/v2/projects/renthero-landlord-ai/agent/intents \
// -H 'Authorization: Bearer ya29.GlutBSLCwzLkVdipt3nQpDtrRvGtx5VuO8-EfRFV_n28XZ0od7w_uZeb6RCgCJo99Nl8QoHj7yIhHmAa99Ewb838xqHghlp5RnobnGVbn9PCWAOQw9kkBb6Vexd2' \
// -H 'Content-Type: application/json'
