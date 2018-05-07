const NODE_ENV = require('../../../ENV_CREDS').NODE_ENV
let endpoint
if (NODE_ENV === 'production') {
  endpoint = 'https://renthero.host:8304'
} else if (NODE_ENV === 'staging') {
  endpoint = 'https://renthero.host:8304'
} else if (NODE_ENV === 'development') {
  endpoint = 'https://04ec32f1.ngrok.io'
}

exports.intents = {
  domain_prefix: '.SPEC_UNSTRUC',
  relationships: [
    {
      dialogFlow_intentName: '.SPEC_UNSTRUC---NoiseRestrictions',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/a9c6b88e-d8bc-458a-87aa-58afee3bd55a',
      endpoint: `${endpoint}/dialogflow_typeform_answers`
    }
  ]
}
