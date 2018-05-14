

// for knowledge domain mappings, check `/api/knowledge_domains/knowledge_domain_mappings.js`
exports.getMap = function() {
  const bucket_path = 'https://s3.amazonaws.com/renthero-ai-mappings/'
  const bucket_name = 'renthero-ai-mappings'
  const theMap = {
    URL_basic_typeform_elastic_map: (bucket_path + 'typeforms/' + process.env.NODE_ENV + '/basic_typeform/basic_typeform_elastic_map.json'),
    URL_basic_elastic_dialog_map: (bucket_path + 'dialogflow/' + process.env.NODE_ENV + '/basic_typeform/basic_elastic_dialog_map.json'),
    URL_advanced_typeform_elastic_map: (bucket_path + 'typeforms/' + process.env.NODE_ENV + '/advanced_typeform/advanced_typeform_elastic_map.json'),
    URL_advanced_elastic_dialog_map: (bucket_path + 'dialogflow/' + process.env.NODE_ENV + '/advanced_typeform/advanced_elastic_dialog_map.json'),
    URL_seeking_typeform_elastic_map: (bucket_path + 'typeforms/' + process.env.NODE_ENV + '/seeking_typeform/seeking_typeform_elastic_map.json'),
    URL_seeking_elastic_dialog_map: (bucket_path + 'dialogflow/' + process.env.NODE_ENV + '/seeking_typeform/seeking_elastic_dialog_map.json'),
    URL_dialogflow_sql_match_map: (bucket_path + 'typeforms/' + process.env.NODE_ENV + '/dialogflow_sql/dialogflow_sql_match_map.json'),
    BUCKET_NAME: bucket_name
  }
  return theMap
}
