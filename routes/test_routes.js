const fs = require('fs')

// GET /test
exports.test = function(req, res, next){
  res.json({
    message: "Test says alive and well"
  })
}

exports.typeform_webhook = function(req, res, next) {
  console.log(req.body)
  // outputted JSON can be read in pretty format at: https://jsonformatter.curiousconcept.com/
  fs.writeFile("./output/typeform_output.json", JSON.stringify(req.body), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!")
    res.status(200).send({
      message: 'ok'
    })
  })
}
