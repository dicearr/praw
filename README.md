# praw
[![Build Status](https://travis-ci.org/dicearr/praw.svg?branch=master)](https://travis-ci.org/dicearr/praw)
[![Coverage Status](https://coveralls.io/repos/github/dicearr/praw/badge.svg?branch=master)](https://coveralls.io/github/dicearr/praw?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Heroku](http://heroku-badge.herokuapp.com/?app=praw&style=flat&svg=1&root=index.html)](http://praw.herokuapp.com)

> Tourists, restaurants, reviews and so on

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
This will allow to access to the webpage in `http://localhost`. Some important urls are:

- `/api` - With the API [Swagger](http://swagger.io/docs/specification/what-is-swagger/) documentation
- `/api/review` - With the `review` endpoint
- `/` - With the webpage itself

If you don't want to launch the application locally you can deploy it to [Heroku](https://www.heroku.com). By the way, to acomplish with continuous deployment principle this application is deployed with every commit (successfully tested) in [![Heroku](http://heroku-badge.herokuapp.com/?app=praw&style=flat&svg=1&root=index.html)](http://praw.herokuapp.com)
