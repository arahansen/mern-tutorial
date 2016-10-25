# MERN Tutorial
The MERN Stack is a set of libraries and frameworks that allow developers to develop full-stack applications using only JavaScript. The stack consists of:

* [MongoDB](https://www.mongodb.com/)
* [Express](http://expressjs.com/)
* [React](https://facebook.github.io/react/)
* [Node](https://nodejs.org/en/)

This stack is appealing because it allows developers who might traditionally be "trapped" on the front-end to extend their JavaScript super powers across the entire pipeline of an application without the cognitive-overhead of context switching between programming languages and oftentimes programming paradigms.

## Jump In (Run Tutorial Examples)

### step-0 || step-1
`step-0` and `step-1` can be run by simply opening their corresponding `index.html` files in a browser. `step-0` is a bare-minimum "Hello, World" for React using JSX but no  build step 🎉! `step-1` is a fully client-side implementation of the app we will be building.

### step-2 || step-3
`step-2` and `step-3` can be run with `npm run start:step-{2 or 3}`. `step-2` introduces the Node server and Express for serving content. `step-3` implements a REST-ful API using Express and stores/retrieves data from a MongoDB database.

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

# Beyond This Tutorial
The purpose of this tutorial is to serve as a jumping-off point for full-stack Javascript development. To expand on the ideas and concepts implemented here, I recommend checking out [mern.io](http://mern.io/) for a fully-featured, production-ready implementation of the "MERN Stack" that includes server-side rendering, component generation CLI, a development pipeline using Webpack, and much more!

If you have any questions feel free to reach out either here or find me on Twitter [@arahansen](https://twitter.com/arahansen). I'd be more than happy to chat!
