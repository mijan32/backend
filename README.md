# Mock Relying Party Server

This is a simple node js application which will act as backend for the Mock Relying Party portal.

## Overview

Mock Relying Party Server has 1 endpoint.

- Post /fetchUserInfo:
  Request Body (application/json) = {
  "code": "{{code}}",
  "client_id": "{{clientId}}",
  "redirect_uri": "{{redirectionUrl}}",
  "grant_type": "authorization_code",
  "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  "client_assertion": "{{client_assertion}}"
  }

  Response (application/json) = The response is signed and then encrypted, with the result being a Nested JWT.

## Build & run (for developers)

The application run on PORT=8888.

- Env variables

  - ESIGNET_SERVICE_URL: MOSIP ESIGNET API URL (Example:http://esignet.esignet/v1/esignet)

- Build and run Docker for a service:

  ```
  $ docker build <dockerImageName>:<tag> .
  $ docker run -it -d -p 8888:8888 --env ESIGNET_SERVICE_URL='<MOSIP ESIGNET API URL>' <dockerImageName>:<tag>
  ```

- Build and run on local system:
  Update "devstart" script in package.json file : "SET PORT=8888 && SET ESIGNET_SERVICE_URL='<MOSIP ESIGNET API URL>' && node app.js && nodemon ."
  ```
  $ npm run devstart
  ```
# frontend-project
# backend
