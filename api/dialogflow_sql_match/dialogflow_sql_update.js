const AWS = require('aws-sdk')
const path = require('path')
const pathToAWSConfig = path.join(__dirname, '../..', 'credentials', 'aws_config.json')
const aws_config = require(pathToAWSConfig)
AWS.config.update(aws_config)
const S3 = new AWS.S3()

const dialogflow_sql_match_map = require('./js/dialogflow_sql_match_map').getMap().dialogflow_sql_match_map
const URL_dialogflow_sql_match_map = require('../mapping_locations').getMap().URL_dialogflow_sql_match_map
const BUCKET_NAME = require('../mapping_locations').getMap().BUCKET_NAME

const uploadS3 = (filePath, fileBody) => {
  const p = new Promise((res, rej) => {
    const fileKey = filePath.slice(
      filePath.indexOf(`https://s3.amazonaws.com/${BUCKET_NAME}/`) + `https://s3.amazonaws.com/${BUCKET_NAME}/`.length
    )
    S3.upload({
  				Bucket: BUCKET_NAME,
  		    Key: fileKey,
  		    Body: fileBody,
  		    ACL: 'public-read'
  		}, (err, S3Object) => {
  	    if (err) {
  	      	const msg = `There was an error uploading your file: ${err.message}`
  	      	console.log(err)
  	      	rej(msg)
  	      	return
  	    }
  			const msg = `Successfully update file ${fileKey}`
  			res(S3Object)
  	})
  })
  return p
}

const saveNewMappingsToS3 = () => {
  console.log('\n \n \n')
  console.log('=======> BEGINNING SQL MAPPINGS UPDATE')
  console.log(`dialogflow_sql_match_map`)
  console.log('\n \n')
  const x = [
    uploadS3(URL_dialogflow_sql_match_map, JSON.stringify(dialogflow_sql_match_map))
  ]
  Promise.all(x)
    .then((data) => {
      console.log('=======> SUCCESSFULLY UPDATED SQL MAPPINGS')
      console.log(data)
      console.log('\n \n')
      console.log('=======> UPDATING COMPLETE')
    })
    .catch((err) => {
      console.log('=======> FAILED TO UPDATE SQL MAPPINGS')
      console.log(err)
    })
}

saveNewMappingsToS3()
