exports.intents = {
  domain_prefix: 'GEO',
  relationships: [
    // leirsure
    {
      dialogFlow_intentName: 'GEO---NearbyBars',
      dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_bar'
    },
    {
      dialogFlow_intentName: 'GEO---NearbyNightClub',
      dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_night_club'
    },
    // {
    //   dialogFlow_intentName: 'GEO---NearbyPark',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_park'
    // },
    // Banking Routes
    {
      dialogFlow_intentName: 'GEO---NearbyBank',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/b1e75ee4-a7ac-40f7-a219-9daac2ebc560',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_bank'
    },
    // education routes
    {
      dialogFlow_intentName: 'GEO---NearbyLibrary',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/febcbb69-1183-435c-9886-7b2e6b757c19',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_library'
    },
    {
      dialogFlow_intentName: 'GEO---NearbySchool',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/6152cd34-29e0-47d0-868b-42ad7d3b4da2',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_school'
    },
    // shopping routes
    // {
    //   dialogFlow_intentName: 'GEO---NearbyConvenienceStore',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_convenience_store'
    // },
    // {
    //   dialogFlow_intentName: 'GEO---NearbyLiquorStore',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_liquor_store'
    // },
    // {
    //   dialogFlow_intentName: 'GEO---NearbyHardwareStore',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_hardware_store'
    // },
    {
      dialogFlow_intentName: 'GEO---NearbyStore',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/fbfda210-c5c2-404c-a0d9-042046e9741d',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_store'
    },
    {
      dialogFlow_intentName: 'GEO---NearbyMall',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/79826459-1619-426c-b72d-4789a36422c1',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_mall'
    },
    // {
    //   dialogFlow_intentName: 'GEO---NearbySupertmarket',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_supermarket'
    // },
    // automotive routes
    // {
    //   dialogFlow_intentName: 'GEO---NearbyBusStation',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_bus_station'
    // },
    // {
    //   dialogFlow_intentName: 'GEO---NearbySubway',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_subway'
    // },
    // {
    //   dialogFlow_intentName: 'GEO---NearbyAirport',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_airport'
    // },
    {
      dialogFlow_intentName: 'GEO---NearbyTransitStation',
      dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_transit_station'
    },
    // {
    //   dialogFlow_intentName: 'GEO---NearbyTrainStation',
    //   dialogFlow_intentID: 'projects/renthero-landlord-ai/agent/intents/8cc81ef4-6563-45f7-92bc-7e32fb6d24f7',
    //   endpoint: 'https://0aff22ab.ngrok.io/get_nearby_train_station'
    // },

    // geo routes
    {
      dialogFlow_intentName: 'GEO---NearbyRestaurants',
      dialogFlow_intentID: 'projects/dev-landlordai-8221e/agent/intents/3e4d170a-9779-4ee6-80fa-4595e0db4b19',
      endpoint: 'https://0aff22ab.ngrok.io/get_nearby_restaurants'
    },
    // add in rest of routes
  ]
}
