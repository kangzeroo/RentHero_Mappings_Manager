const URL_seeking_elastic_dialog_map = require('./api/mapping_locations').URL_seeking_elastic_dialog_map


const fileKey = URL_seeking_elastic_dialog_map.slice(
  URL_seeking_elastic_dialog_map.indexOf('https://s3.amazonaws.com/renthero-ai-typeform-references') + 'https://s3.amazonaws.com/renthero-ai-typeform-references'.length
)

console.log(fileKey)
