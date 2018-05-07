exports.intents = {
  domain_prefix: '.SPEC_STRUC',
  relationships: [

    {
      dialogFlow_intentName: '.SPEC_STRUC---MonthlyCostPerRoom',
      dialogFlow_intentID: 'projects/dev-landlordai/agent/intents/0211ae29-60cc-4b73-8776-299d56a12381',
      endpoint: 'https://285f9b5c.ngrok.io/monthly_cost_per_room'
    },
    {
      dialogFlow_intentName: '.SPEC_STRUC---Images',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/ebc0403a-3a12-46bf-b55a-335ee0454d46',
      endpoint: 'https://285f9b5c.ngrok.io/get_images_for_ad'
    },
    // get intent IDs
    {
      dialogFlow_intentName: '.SPEC_STRUC---Address',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/ebc0403a-3a12-46bf-b55a-335ee0454d46',
      endpoint: 'https://285f9b5c.ngrok.io/get_ad_address'
    },
    {
      dialogFlow_intentName: '.SPEC_STRUC---PostalCode',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/ebc0403a-3a12-46bf-b55a-335ee0454d46',
      endpoint: 'https://285f9b5c.ngrok.io/get_ad_postal_code'
    },
    {
      dialogFlow_intentName: '.SPEC_STRUC---Description',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/ebc0403a-3a12-46bf-b55a-335ee0454d46',
      endpoint: 'https://285f9b5c.ngrok.io/get_ad_description'
    },
    {
      dialogFlow_intentName: '.SPEC_STRUC---Amenities',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/ebc0403a-3a12-46bf-b55a-335ee0454d46',
      endpoint: 'https://285f9b5c.ngrok.io/get_ad_amenities'
    },
  ]
}
