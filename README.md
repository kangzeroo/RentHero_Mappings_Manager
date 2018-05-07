# DialogFlow + Ad Specifics Sandbox

## VidYard Instructions (WARNING: May be outdated)
1. DialogFlow + RentHero Overview (https://share.vidyard.com/watch/spssnCx2dD8FAdTxU6vPFA)
2. Linking Typeform with DialogFlow (https://share.vidyard.com/watch/c4vVqGRUt4SKgMnzLeurR8)

## IMPORTANT TO READ:
- Do not use the deprecated `npm run update-basic` and other similar commands. They do not have environments set up (dev, staging, prod). You should use the command `npm run dev`, `npm run staging` or `npm run prod` and follow the instructions on the terminal screen.
- If you run into a `401 Error - Request had invalid authentication credentials. Expected OAuth 2 access token...`, then you need to update your `credentials/dialogflow_api_key.js`. See instructions below (`How to get DialogFlow Credentials using Google OAuth Playground`)

## Objectives
This `Typeform_Sandbox` repo serves the following development purposes:
0. Easy way to manage mappings in dev/staging/prod
1. View Typeforms Question Structures to see question_ids. Used for updating `api/landlord_*_form/js/*_typeform_elastic_map.js`
2. Getting Typeform Results to see how submitted Typeforms look as JSON. You will not need this but good to know the flow. Be careful not to modify in production!
3. Testing validity of `api/landlord_*_form/js/*_typeform_elastic_map.js` and `api/landlord_*_form/js/*_elasic_dialog_map.js`. These checks verify that a new mapping will actually work in production. Make sure you run this every time before uploading a new mapping to S3. Use `npm run basic-test`, or see `package.json > scripts` for a list of all tests.
4. Saving a new mapping to S3. Only do this when you are certain you want to update mappings and all tests have passed. Use `npm run update-test` or see `package.json > scripts` for a list of all updates.

## You will need
Please keep all credentials secure inside the `credentials/` folder. Do not let outsiders get access to our credentials or else they can fuck with us!!
1. Online CURL: https://onlinecurl.com/
2. Download Ngrok: https://ngrok.com/
3. Online JSON formatter: https://jsonformatter.curiousconcept.com/
4. DialogFlow credentials acquired using Google OAuth Playground and saved in `credentials/dialogflow_api_key.js`. This credential only lasts 1 hour so you will have to get the credentials often.
5. Typeform Credentials acquired from Typeform Settings and saved in `credentials/typeform_api_key.js`
6. AWS Credentials acquired via USB from Kangze or Jimmy. You will not be able to update mappings without these credentials.
7. NodeJS environment setup. Be sure to also run `npm install` so that you can use all the libraries.

## How to switch node environments (dev, staging, prod)
1. Method 1 (preferred): Run the appropriate command: `npm run dev`, `npm run staging` or `npm run prod`
2. Method 2 (deprecated): To change `NODE_ENV`, simply go to `./api/ENV_CREDS.js` and comment out `development`, `staging` or `production`. All `npm` actions will be applied to the `NODE_ENV` you choose. Be careful not to accidentally something in prod!

## How to get DialogFlow Credentials using Google OAuth Playground
1. Go to `https://developers.google.com/oauthplayground/`
2. From `Step 1: Select & authorize APIs`, select `Dialogflow API v2 > https://www.googleapis.com/auth/cloud-platform` and click `Authorize APIs`
3. In the popup login screen, use `support@rentburrow.com` to login. You must use this email because it is the owner of our DialogFlow Agent
4. From `Step 2: Exchange authorization code for tokens`, click the button that says `Exchange authorization code for tokens`
5. Copy the outputted `Access token`. It should begin with `ya29.GlutB...`. Save this to `./credentials/dialogflow_api_key.js` so that it can be used in the tests

## How to get Typeform Credentials
1. Go to `https://admin.typeform.com/account#/section/tokens`
2. Select from the lefthand menu `For testing purposes` and copy the code. Save this to `./credentials/typeform_api_key.js`. If you want to use this in a CURL command, make sure you copy the auth code to `view_typeform.txt` and `setup_typeform_webhook.txt`

## Viewing Typeform Question Structures
1. Copy the code from `view_typeform.txt` with the appropriate `form_id` for the form you want to view
2. Copy the results and paste into the JSON formatter. You can now see all the questions and their IDs

## Getting Typeform Results
Please be careful not to modify a Typeform in production, because it will cause failures
1. Run this localhost repo with `npm run dev`
2. Install and run Ngrok with `ngrok http 8001` to create a publically available webserver linked to your localhost repo
3. Copy the code from `setup_typeform_webhook.txt` and fill in the variables required in the template (ie. your ngrok https url)
4. Paste that code into online CURL and press enter. This `curl` command tells typeform where to send completed form submissions (aka your webhook)
5. Test your typeform by completing a submission. Your localhost repo should receive the submission (aka your webhook was successfully hit)

## Testing Validity of Mappings
You have 2 mappings per Typeform. They are listed below and linked together based on `TAG_IDs`
1. `api/landlord_basic_form/js/basic_elastic_dialog_map.js` which determines what DialogFlow Intents correspond to what `TAG_IDs`. Update this file whenever you add new DialogFlow Intents that affect the `basic_typeform`, and repeat for the other typeforms (`advanced`, `seeking`...etc).
2. `api/landlord_basic_form/js/basic_typeform_elastic_map.js` which determines what Typeform Questions correspond to what `TAG_IDs`. Update this file whenever you add a question or change a question type on a Typeform.
<br/>
Whenever you have updated any mapping, be sure to test it using `npm run basic-test`. See `package.json > scripts` for the full list of possible tests you can run.

## Updating Mappings
Mappings are stored to AWS S3 so that multiple microservices can access them. Each mapping has a pre-defined location on our S3 bucket. Only update a mapping if it has passed the tests first. To update a mapping, run `npm run update-basic`. See `package.json > scripts` for the full list of possible update commands you can run.
