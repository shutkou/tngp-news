




## Project setup

```bash
$ npm install
$ npm run build
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test in browser

#### angular website is served at:
localhost:3000

#### API endpoint:
localhost:3000/api

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploy to hoster

#### 1. create a release branch with dist/ folder files
#### 2. on the hoster server:
```bash
$ cd home/tngp-news
$ rm -rf dist/*
$ cp -r dist-release/* dist/
```
#### 3. install dependencies via the pannel UI
#### 4. restart the app via the pannel UI


