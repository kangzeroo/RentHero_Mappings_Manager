const fs = require('fs')
const axios = require('axios')
const advanced_form_id = require(`../../credentials/${process.env.NODE_ENV}/typeform_profile`).advanced_form_id
const auth_token = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_api_key').auth_token
const PROJECT_ID = require('../../credentials/'+process.env.NODE_ENV+'/dialogflow_profile').PROJECT_ID


const templateTypeform = () => {
  const header = {
    headers: {
      Authorization: 'Bearer 2kSctvHaxdvidEhUuXjL5C35DrPTTb2MxC34mvRVdgfe'
    }
  }
  axios.get(`https://api.typeform.com/forms/${advanced_form_id}`, header)
    .then((data) => {
      console.log(data.data)
      const template = {
        form_id: advanced_form_id,
        questions: data.data.fields.map((f) => {
          return {
            question_ids: [f.id],
            sample_phrasing: f.title,
            tag_ids: []
          }
        })
      }
      fs.writeFile(`./api/landlord_advanced_form/${process.env.NODE_ENV}/templates/template_typeform_elastic_map.json`, JSON.stringify(template), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('---> Saved the template of typeform mappings')
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const templateDialogFlow = () => {
  const header = {
    headers: {
      'Authorization': `Bearer ${auth_token}`
    }
  }
  axios.get(`https://dialogflow.googleapis.com/v2/projects/${PROJECT_ID}/agent/intents`, header)
    .then((data) => {
      const list = data.data.intents.filter((int) => {
        return int.displayName.indexOf('SPEC_UNSTRUC') > -1
      })
      console.log(list)
      const template = {
        form_id: advanced_form_id,
        relationships: list.map((intent) => {
          return {
            dialogFlow_intentName: intent.displayName,
            dialogFlow_intentID: intent.name,
            typeForm_Tags: []
          }
        })
      }
      fs.writeFile(`./api/landlord_advanced_form/${process.env.NODE_ENV}/templates/template_elastic_dialog_map.json`, JSON.stringify(template), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('---> Saved the template of dialogflow mappings')
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.templateTypeform = templateTypeform
exports.templateDialogFlow = templateDialogFlow
