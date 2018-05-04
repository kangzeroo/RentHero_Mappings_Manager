const axios = require('axios')
const fs = require('fs')

const projectID = 'dev-landlordai'
const headers = {
 headers: {
   "Authorization": `Bearer ya29.GluxBcdvhPI5ZiuFSHjCUYNmEw-tGlwPgJeEZ3014-g1p_gS5oXAFVF3L2oG4FMFhBJwoUdH5AWiBwtLnA8BVvEPLIz3V-k9_8nC1P7a5RX738TscINR9P4w8PeA`,
   "Content-Type": 'application/json'
 }
}

axios.get(`https://dialogflow.googleapis.com/v2/projects/${projectID}/agent/intents`, headers)
 .then((data) => {
   console.log(data.data)
   fs.writeFile("./output/dialogflows.json", JSON.stringify(data.data), function(err) {
     if(err) {
         return console.log(err);
     }
     console.log("The file was saved!")
   })
 })
 .catch((err) => {
   console.log(err)
   console.log(err.response.data)
 })
