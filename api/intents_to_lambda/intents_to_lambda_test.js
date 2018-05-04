const axios = require('axios')
const auth_token = require('../../creds/dialogflow_api_key').auth_token
const intents_to_lambda_map = require('./js/intents_to_lambda_map').intents_to_lambda_map
const projectID = 'dev-landlordai'

console.log('testing intents to lambda...')
