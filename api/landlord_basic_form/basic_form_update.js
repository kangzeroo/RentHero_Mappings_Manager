const AWS = require('aws-sdk')
const path = require('path')
const pathToAWSConfig = path.join(__dirname, '../..', 'creds', 'aws_config.json')
const aws_config = require(pathToAWSConfig)
AWS.config.update(aws_config)
const S3 = new AWS.S3()

const basic_elastic_dialog_map = require('./js/basic_elastic_dialog_map').basic_elastic_dialog_map
const basic_typeform_elastic_map = require('./js/basic_typeform_elastic_map').basic_typeform_elastic_map
const URL_basic_elastic_dialog_map = require('../mapping_locations').URL_basic_elastic_dialog_map
const URL_basic_typeform_elastic_map = require('../mapping_locations').URL_basic_typeform_elastic_map
const BUCKET_NAME = require('../mapping_locations').BUCKET_NAME

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
  console.log('=======> BEGINNING MAPPINGS UPDATE')
  console.log(`basic_elastic_dialog_map and basic_typeform_elastic_map`)
  console.log('\n \n')
  const x = [
    uploadS3(URL_basic_elastic_dialog_map, JSON.stringify(basic_elastic_dialog_map)),
    uploadS3(URL_basic_typeform_elastic_map, JSON.stringify(basic_typeform_elastic_map))
  ]
  Promise.all(x)
    .then((data) => {
      console.log('=======> SUCCESSFULLY UPDATED MAPPINGS')
      console.log(data)
      console.log('\n \n')
      console.log('=======> UPDATING COMPLETE')
    })
    .catch((err) => {
      console.log('=======> FAILED TO UPDATE MAPPINGS')
      console.log(err)
    })
}

saveNewMappingsToS3()
