# Deploying to Amplify

## Steps

1. Set up repo from `opendoc-template` or copy amplify.yml manually

1. Connect App
![](/assets/amplify-connect.png)

1. Set environment variables
![](/assets/amplify-envvar.png)

1. Set service role in general settings
![](/assets/amplify-servicerole.png)

1. Check if webhook is set in Github (this should be done automatically when connecting to amplify)
![](/assets/amplify-webhook.png)

1. After build, check that search and pdf works.

## Troubleshooting

### Search not working

Check amplify build > frontend logs that APP_NAME is set correctly and status code is 202.
![](/assets/amplify-elasticsearch.png)

### PDF not working

Ensure that PDF_LAMBDA_KEY and PDF_LAMBDA_SERVER is correctly set.
![](/assets/amplify-pdf.png)
