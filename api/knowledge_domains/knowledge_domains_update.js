const AWS = require('aws-sdk')
const path = require('path')
const pathToAWSConfig = path.join(__dirname, '../..', 'credentials', 'aws_config.json')
const aws_config = require(pathToAWSConfig)
AWS.config.update(aws_config)
const S3 = new AWS.S3()
const readline = require('readline')
const domain_mappings = require('./knowledge_domain_mappings').domain_mappings
const BUCKET_NAME = require('../mapping_locations').getMap().BUCKET_NAME

const update = (rl) => {
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // })
  const q1 = `
    Which knowledge_domain mapping do you want to update?
    \n
    - .META
    - .SEARCHING
    - .GENERAL
    - .SPEC_STRUC
    - .SPEC_UNSTRUC
    - .TOURS
    - .HUMAN
    - .GEO
  `

  rl.question(q1, (answer) => {
    console.log(`--> You selected: ${answer}`);
    let s3_location = ''
    domain_mappings.domains.forEach((d) => {
      if (d.domain_prefix === answer) {
        s3_location = d.s3_mapping
      }
    })
    rl.close();
    console.log('=======> BEGINNING MAPPINGS UPDATE')
    console.log(`--> Successfully found the path to this domain's s3 location: ${s3_location}`)
    if (s3_location) {
      grabMapping(answer)
        .then((mapFile) => {
          console.log(`--> Sucessfully grabbed the new map file`)
          return updateMapping(mapFile, s3_location)
        })
        .then((data) => {
          console.log('=======> SUCCESSFULLY UPDATED MAPPINGS')
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log(`======> ERROR! Could not find an S3 location for your chosen answer: ${answer}`)
    }
  });
}

const grabMapping = (answer) => {
  const p = new Promise((res, rej) => {
    let mapFile
    if (answer === '.META') {
      mapFile = require('./'+process.env.NODE_ENV+'/js/meta_intents').intents
    } else if (answer === '.SEARCHING') {
      mapFile = require('./'+process.env.NODE_ENV+'/js/searching_intents').intents
    } else if (answer === '.GENERAL') {
      mapFile = require('./'+process.env.NODE_ENV+'/js/general_intents').intents
    } else if (answer === '.SPEC_STRUC') {
      mapFile = require('./'+process.env.NODE_ENV+'/js/specific_struc_intents').intents
    } else if (answer === '.SPEC_UNSTRUC') {
      mapFile = require('./'+process.env.NODE_ENV+'/js/specific_unstruc_intents').intents
    } else if (answer === '.TOURS') {
      mapFile = require('./'+process.env.NODE_ENV+'/js/tours_intents').intents
    } else if (answer === '.HUMAN') {
      mapFile = require('./'+process.env.NODE_ENV+'/js/human_intents').intents
    } else if (answer === '.GEO') {
      mapFile = require('./'+process.env.NODE_ENV+'/js/geo_intents').intents
    }
    if (mapFile) {
      res(mapFile)
    } else {
      rej(`Could not find the js mapping file for your chosen intent: ${answer}`)
    }
  })
  return p
}

const updateMapping = (mapFile, s3_location) => {
  const p = new Promise((res, rej) => {
    console.log(`--> Beginning to update the s3 mapping`)
    uploadS3(s3_location, JSON.stringify(mapFile))
      .then((data) => {
        console.log(`--> Successfully updated the s3 mapping`)
        console.log(data)
        res(data)
      })
      .catch((err) => {
        console.log(`--> Failed to update the s3 mapping`)
        rej(err)
      })
  })
  return p
}

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

exports.update = update
exports.updateMapping = updateMapping
exports.grabMapping = grabMapping
