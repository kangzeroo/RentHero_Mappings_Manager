# Typeform Webhook

## You will need
1. Online CURL: https://onlinecurl.com/
2. Download Ngrok: https://ngrok.com/

## Setup Instructions
1. Run this localhost repo with `npm run dev`
2. Install and run Ngrok with `ngrok http 8001` to create a publically available webserver linked to your localhost repo
3. Copy the code from `setup_typeform_webhook.txt` and fill in the variables required in the template (ie. your ngrok https url)
4. Paste that code into online CURL and press enter. This `curl` command tells typeform where to send completed form submissions (aka your webhook)
5. Test your typeform by completing a submission. Your localhost repo should receive the submission (aka your webhook was successfully hit)

## What to do:
