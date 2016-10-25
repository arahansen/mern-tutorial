# MERN Tutorial

## Jump In (Run Tutorial Examples)

### step-0 & step-1
`step-0` and `step-1` can be run by simply opening their corresponding `index.html` files in a browser.

`step-0` is a bare-minimum "Hello, World" for React using JSX but no  build step 🎉.

`step-1` is a fully client-side implementation of the app we will be building.

### step-2 & step-3
`step-2` and `step-3` can be run with `npm run start:step-{2 or 3}`

**NOTE:** You must have mongoDB installed and running to run these examples. (See below for installation and start up instructions)

## Getting Started (From Scratch)
The following instructions walk through setting up MongoDB on MacOS. Instructions for other OS platforms can be found [here](https://docs.mongodb.com/getting-started/shell/installation/).

### Install & Run mongoDB
1. install mongodb - `brew update && brew install mongodb`

1. create folder for database storage - `mkdir -p /data/db`

1. set read/write permissions - `sudo chmod 0755 /data/db && chown $USER /data/db`

1. start mongodb - `mongod`

## Initialize Application
1. `mkdir mern-tutorial && cd mern-tutorial`

1. `npm init`

1. `npm install express body-parser mongoose --save`
