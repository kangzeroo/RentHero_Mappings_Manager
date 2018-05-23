exports.intents = {
  domain_prefix: 'TOURS',
  relationships: [
    {
      dialogFlow_intentName: 'TOURS---InterestedProperty',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/0f2b8ad5-e932-49a3-a848-6149be3ef74f',
      endpoint: 'https://renthero.host:8305/interested_in_property'
    },
    {
      dialogFlow_intentName: 'TOURS---TourRequest',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/0f2b8ad5-e932-49a3-a848-6149be3ef74f',
      endpoint: 'https://renthero.host:8305/tour_requested'
    }
  ]
}
