```sh
# Telnyx-Wdio-Docker-test

This project do https://telnyx.com/ part of the functionality e2e tests on wdio-mocha framework .

Allure is used as a reporter in this project.

# Requirement

[Node.js v18.15.0.](https://nodejs.org/en/blog/release/v18.15.0)

# How to start

Download or clone a project

To clone a project with `GIT`, call `git clone https://github.com/makarkaram/Wdio-Telnyx-docker.git `

To install dependencies , call `npm i`

## Run

To run test call `npm run wdio`

To run with docker, call first `npm run docker` then `npm run wdio:docker`

to run in chrome, call `npm run chrome`

to run in edge, call `npm run edge`

to run in firefox, call `npm run firefox`

to run with allure report call, `npm run test:report`


```