# cypress-test-tiny cy.intercept skip

## Problem

Sometimes cy.intercept seems to skip requests. This occurs more if the computer is under heavy load and seemable never
if it's just one plain request.

## Setup
There is 3 Testcases. The first ones show how a small amount of request seem to work fine in Cypress, however 
the 3rd one executes a bunch of requests and mostly fails. (You might have to adjust the numbers to your local machine
to get the desired effect)

cy.intercept is called in support/e2e.js to ensure every xhr request should be intercepted. 
Then should add Cypress the X-E2E-User header to them.

The Backend is emulated by a simple wiremock. The wiremock has two different responses:
1. if the header was not added and everything is fine it returns 200 with the body "Hello XHR"
2. If the header was not added it returns 400 with the Body "ERROR" 

## How to run?

Start the wiremock: `java -jar .\wiremock-jre8-standalone-2.35.0.jar`

Start cypress: `cypress run`

The 3rd testcase fails while the others are successful. 

Wiremock also gets requests without the header, this can be validated here: `http://localhost:8080/__admin/requests?matchingStub=cb66d902-f3af-40e1-aa03-a8d94e611a2d`
