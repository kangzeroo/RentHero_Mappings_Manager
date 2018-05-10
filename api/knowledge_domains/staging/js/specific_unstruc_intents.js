const NODE_ENV = require('../../ENV_CREDS').NODE_ENV
let endpoint
if (NODE_ENV === 'production') {
  endpoint = 'https://renthero.host:8304'
} else if (NODE_ENV === 'staging') {
  endpoint = 'https://renthero.host:8304'
} else if (NODE_ENV === 'development') {
  endpoint = 'https://04ec32f1.ngrok.io'
}

exports.intents = {
  domain_prefix: 'SPEC_UNSTRUC',
  relationships: [
    {
      dialogFlow_intentName: 'SPEC_UNSTRUC---NoiseRestrictions',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/a9c6b88e-d8bc-458a-87aa-58afee3bd55a',
      endpoint: `${endpoint}/dialogflow_typeform_answers`
    }
  ]

exports.intents = {
   "domain_prefix":"SPEC_UNSTRUC",
   "relationships":[
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---LawnCare",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/9a5fab55-44d0-41a4-a578-04198d68e73a",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---Parking",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/b5b786dd-4cdb-4b8d-8042-ba15a4d0b8e0",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---Inspections",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/7918ad0e-673c-4909-a926-4ed9103d2fa3",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---LeaseDiscount",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/8fa8f098-f9c6-454f-9715-b255ef3539ab",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---Commitment",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/4af99d87-d70b-485d-bf8f-62667dbc48ae",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---TenantInsurance",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/a3f5fe2e-29b2-4320-b5f5-c48047a8037d",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---MoveIn",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/14972770-3de3-4cc2-862f-8d6c6ba109e5",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---Garbage",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/d8bb1a49-f5d2-49f8-9bef-29466c19f20e",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---LeaseTerms",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/f3f6efee-20ba-48b4-a371-99de6481966b",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---Decorate",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/c4117473-2fec-4bbc-9760-cc031e3cab0f",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---RequiredDocuments",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/a43b5fad-a475-49e5-94b9-df966326a567",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---KeyAccess",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/45d31c31-7b0d-4e40-bc60-abcbddd10915",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---IdealTenant",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/60db8de3-d2b2-40a5-be2b-741a548263fd",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---DepositRequirements",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/6d3705f2-32cf-432b-bf21-4dddc6611200",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---SpecialGuests",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/cffd8f25-e919-4c1a-860d-0351783db85a",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---IncomeRequirements",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/b3d99e69-8c4b-4e98-8297-4655d8a744bf",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---Fees",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/75794854-1932-42fd-981d-a8e6c82eb967",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---Liability",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/38ff2587-ecac-4102-b64d-3ffd48add5ed",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---LeaseRenewal",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/96baa61f-d125-49d3-938c-a395798fa9d5",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---Pets",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/34142e54-9554-4f7f-93a5-11f0de294a57",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---ProRate",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/7adb0f5d-0503-4692-98d3-d87348ad7ea2",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---EarlyTermination",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/2276a5ba-b71a-4d6f-9df3-0aad69a4e0f3",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---ReserveUnit",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/d09f4d16-178b-43f6-944a-68a78405c2fb",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---PaymentMethod",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/2e2fa184-2bf6-466c-9807-a40a81eeba9f",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---WaitingList",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/0158531c-bc65-4b1b-bd54-36f9adf70c36",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---NoiseRestrictions",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/a9c6b88e-d8bc-458a-87aa-58afee3bd55a",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---SubletConditions",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/3c83bc73-9d32-44fb-93e0-923ca93a8658",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---UtilitiesPaperwork",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/d77f4f5b-bb5e-4300-b11e-29046f169b61",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      },
      {
         "dialogFlow_intentName":"SPEC_UNSTRUC---CellReception",
         "dialogFlow_intentID":"projects/staging-landlordai/agent/intents/98e4e6a8-420b-4b54-85bf-484f21a431d1",
         "endpoint":"https://renthero.host:8304/dialogflow_typeform_answers"
      }
   ]
}
