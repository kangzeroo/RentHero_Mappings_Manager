const readline = require('readline')
const testValidityOfMappings = require('./api/landlord_basic_form/basic_form_test').testValidityOfMappings

console.log('~~~ Welcome to MAPPINGS_MANAGER by RentHero ~~~')
console.log(`You are in [ ${process.env.NODE_ENV} ] mode`)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  const p = new Promise((res, rej) => {
    const q1 = `
      ==> What would you like to do?

      - Enter A: Update DialogFlow -> Typeform Mappings
      - Enter B: Update Knowledge Domain Mappings
      - Enter C: Save DialogFlow Intents

      - Enter Q: To exit
    `

    rl.question(q1, (answer) => {
      console.log(`--> You selected: ${answer}`);
      console.log('\n\n')

      if (answer.toLowerCase() === 'a') {
        res('a')
      } else if (answer.toLowerCase() === 'b') {
        res('b')
      } else if (answer.toLowerCase() === 'c') {
        res('c')
      } else {
        rej('Not a valid selection.')
      }
    })
  })
  return p
}

const question2 = (ans) => {
  const p = new Promise((res, rej) => {
    if (ans === 'a') {
      const q2a = `
        ==> DialogFlow -> Typeform Mappings
        --> Pick an action

        - Enter 1A: Test the Basic Typeform
        - Enter 1B: Update the Basic Typeform

        - Enter 2A: Test the Advanced Typeform
        - Enter 2B: Update the Advanced Typeform

        - Enter 3A: Test the Seeking Typeform
        - Enter 3B: Update the Seeking Typeform

        - Enter Q: To exit
      `
      rl.question(q2a, (answer) => {
        console.log(`--> You chose: ${answer}`);
        console.log('\n\n')
        if (answer.toLowerCase() === '1a') {
          const test = require('./api/landlord_basic_form/basic_form_test').test
          test()
          res()
        } else if (answer.toLowerCase() === '1b') {
          const update = require('./api/landlord_basic_form/basic_form_update').update
          update()
          res()
        } else if (answer.toLowerCase() === '2a') {
          const test = require('./api/landlord_advanced_form/advanced_form_test').test
          test()
          res()
        } else if (answer.toLowerCase() === '2b') {
          const update = require('./api/landlord_advanced_form/advanced_form_update').update
          update()
          res()
        } else if (answer.toLowerCase() === '3a') {
          const test = require('./api/landlord_seeking_form/seeking_form_test').test
          test()
          res()
        } else if (answer.toLowerCase() === '3b') {
          const update = require('./api/landlord_seeking_form/seeking_form_update').update
          update()
          res()
        } else {
          rej('Not a valid selection')
        }
      })
    } else if (ans === 'b') {
      const q2b = `
        ==> Knowledge Domain Mappings
        --> Pick an action

        - Enter A: Test the Knowledge Domain Mappings
        - Enter B: Update the Knowledge Domain Mappings
      `
      rl.question(q2b, (answer) => {
        console.log(`--> You chose: ${answer}`);
        console.log('\n\n')

        if (answer === 'a') {
          const test = require('./api/knowledge_domains/knowledge_domains_test').test
          test()
          res()
        } else if (answer === 'b') {
          const grabMapping = require('./api/knowledge_domains/knowledge_domains_update').grabMapping
          const updateMapping = require('./api/knowledge_domains/knowledge_domains_update').updateMapping
          const domain_mappings = require('./api/knowledge_domains/knowledge_domain_mappings').domain_mappings
          const q3 = `
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

            - Enter Q: To exit
          `
          rl.question(q3, (answer) => {
            console.log(`--> You selected: ${answer}`);
            let s3_location = ''
            domain_mappings.domains.forEach((d) => {
              if (d.domain_prefix === answer) {
                s3_location = d.s3_mapping
              }
            })
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
                  res()
                })
                .catch((err) => {
                  console.log(err)
                  rej(err)
                })
            } else {
              console.log(`======> ERROR! Could not find an S3 location for your chosen answer: ${answer}`)
            }
          });
        } else {
          rej('Not a valid selection')
        }
      })
    } else if (ans === 'c') {
      const downloadIntentsFromAgent = require('./api/dialogflow_intent_ripper/agent_intent').downloadIntentsFromAgent
      downloadIntentsFromAgent()
      res()
    } else {
      rej('Not a valid selection.')
    }
  })
  return p
}



question1()
  .then((ans) => {
    return question2(ans)
  })
  .then((ans) => {
    console.log('-------- end --------')
    rl.close()
  })
  .catch((err) => {
    console.log('-------- error --------')
    console.log(err)
    console.log('-------- end --------')
    rl.close()
  })
