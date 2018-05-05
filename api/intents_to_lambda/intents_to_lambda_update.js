const AWS = require('aws-sdk')
const path = require('path')
const pathToAWSConfig = path.join(__dirname, '../..', 'credentials', 'aws_config.json')
const aws_config = require(pathToAWSConfig)
AWS.config.update(aws_config)
const S3 = new AWS.S3()

const intents_to_lambda_map = require('./js/intents_to_lambda_map').intents_to_lambda_map
const URL_intents_to_lambda_map = require('../mapping_locations').getMap().URL_intents_to_lambda_map
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
  console.log('=======> BEGINNING Intents-to-Lambda MAPPINGS UPDATE')
  console.log(`intents_to_lambda_map`)
  console.log('\n \n')
  const x = [
    uploadS3(URL_intents_to_lambda_map, JSON.stringify(intents_to_lambda_map))
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
