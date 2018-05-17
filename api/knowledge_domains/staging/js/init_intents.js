exports.intents = {
  domain_prefix: 'INIT',
  relationships: [
    {
      dialogFlow_intentName: 'INIT---LandlordWidget',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/42b315ed-7eaa-41ba-9b1c-2d501e0c0b4a',
      endpoint: 'https://renthero.host:8304/init_message'
    },
    {
      dialogFlow_intentName: 'INIT---Interested',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/42b315ed-7eaa-41ba-9b1c-2d501e0c0b4a',
      endpoint: 'https://renthero.host:8304/interested_in_property'
    },
    {
      dialogFlow_intentName: 'INIT---Qualification',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/62e6be46-a719-4a98-a3ff-b3b49948ef5b',
      endpoint: 'https://renthero.host:8304/init_qualification'
    }
  ]
}
