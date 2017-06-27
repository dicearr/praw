# praw
[![Build Status](https://travis-ci.org/dicearr/praw.svg?branch=master)](https://travis-ci.org/dicearr/praw)
[![Coverage Status](https://coveralls.io/repos/github/dicearr/praw/badge.svg?branch=master)](https://coveralls.io/github/dicearr/praw?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Heroku](http://heroku-badge.herokuapp.com/?app=praw&style=flat&svg=1&root=index.html)](https://praw.herokuapp.com)

![PRAW](/docs/praw.PNG?raw=true)
> Tourists, restaurants, reviews and so on

## Dependencies
Some software is required in order to run the application:  
1. [Yarn](https://yarnpkg.com/lang/en/) to manage Node packages.
2. [MongoDB](https://www.mongodb.com) to store the new reviews.

## Deployment
Before launching the application you will need to install all the dependencies and compile the Angular application itself. There is a `build` script prepared for this.
```
$ yarn build
```

## Usage
Once you have `built` the application you can launch it by running:
```
$ yarn start
```
This will allow to access to the webpage in `http://localhost`.
If you don't want to launch the application locally you can deploy it to [Heroku](https://www.heroku.com). By the way, to acomplish with continuous deployment principle this application is deployed with every commit (successfully tested) in [![Heroku](http://heroku-badge.herokuapp.com/?app=praw&style=flat&svg=1&root=index.html)](https://praw.herokuapp.com)

## Documentation
- The REST API has been documented using Swagger. It is available on `http://localhost/api` or  `https://praw.herokuapp.com/api`
- Technical documentation about the frontend can be found in `docs` folder. It has been generated using [Compodoc](https://compodoc.github.io/website/).

## Technology
All the backend has been developed on top of [NodeJS](https://nodejs.org/en/). I have used several node packages.
- `express` - For the web server itself
- `helmet` - Adds security to `express`
- `resourcejs` - Allows you to build a REST API easy
- `mongoose` - To connect with MongoDB

The frontend has been developed using [Angular](https://angular.io/).
- `@agm/core` - To integrate Google places/map API
- `angular-star-rating` - To rate with stars