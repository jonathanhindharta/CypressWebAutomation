# tia_assignment_jonathanhindharta
Tech In Asia QA Engineer Assignment By Jonathan Hindharta

- For Part 1 E2E Automation, it can be found in file E2EAutomation.js
- For Part 2 API Endpoint test suite automation, it can be found in file APIEndPointAutomation.js
- For Bonus Points Write an e2e test case to simulate the following login to your basic account and check your account settings page, it can be found in file E2ELoginBasicAccount.js (notes : user should change tia_email and tia_password data in cypress.config before run the test case)
Notes : (all assert is made base on response per 26th April 2024)
* for endpoint https://www.techinasia.com/wp-json/techinasia/3.0/meta/navigational/sidebar/upcoming-events, case assert if the first object "position" value is 0, there is a change where in assignment assert if value is 1, but in response value is 0, and for assert if the second object "position" value is 1, there is a change where in assignment assert if value is 0, but in response value is 1
* for endpoint https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=10 it changed to https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=30 to match with the case where per_page should 30, but some properties like total and total_pages is assert based on api response
- For Bonus Points Write a Dockerfile to deploy or run your unit test code from Part 2 using docker
container, it can be found in file name : Docker File

To Run Automation file can be done by this steps :
1. To Run All test case in Cypress, type "node_modules/.bin/cypress open" in visual studio code terminal and press enter, after cypress opened, click E2E Testing, choose one of the browser that we desire and click, after that choose and click one of the test specs that we want to run.
2. To Run Specific Test in Specific Browser like Chrome, use this command:
Example For run E2EAutomation.js :
node_modules/.bin/cypress run --headed --browser chrome --spec cypress/integration/E2EAutomation.js
Example For run E2ELoginBasicAccount.js :
node_modules/.bin/cypress run --headed --browser chrome --spec cypress/integration/E2ELoginBasicAccount.js
Example For run E2ELoginBasicAccount.js :
node_modules/.bin/cypress run --headed --browser chrome --spec cypress/integration/APIEndPointAutomation.js

3. Step To Run Docker
- using command "docker build -t <image_name>" to build docker image
- verify docker image is presence using command "docker images"
- login to push docker image using command "docker login"
- tag the image using command "docker tag imagename:tag dockerUsername/imagename:tag"
- push docker image using command "docker push dockerUsername/image-name:v1"
- run docker image using command "docker run <image_name>:<tag_name>"