# API Playground

PLayground API REST

## Getting Started

Use this project on your local machine for development and testing purposes.

### Download and install dependencies

```shell
$ git clone https://github.com/darielmedr/api-playground.git
$ cd api-playground
$ npm install
```

### Usage

```shell
npm run dev
```

## General configuration

### Environment variables

| Name                          | Description                    | Default Value                                       |
| ----------------------------- | ------------------------------ | --------------------------------------------------- |
| API_HOST                      | API host                       | `localhost`                                         |
| API_PORT                      | API port                       | `3001`                                              |
| NODE_ENV                      | Production or development mode | `development`                                       |
| SIMPLE_ARRAY                  | API operations list            | `get, update`                                       |

## Running the tests

### Tests

```shell
npm run test
```

### Coverage

```shell
npm run test:coverage
```

## Built With

- [ExpressJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [TypeDI](https://www.npmjs.com/package/typedi) - dependency injection tool for TypeScript and JavaScript
- [Typescript](https://www.typescriptlang.org/) - typed JavaScript

### Testing

- [Mocha](https://mochajs.org/) - feature-rich JavaScript test framework running on Node.js

## Versioning

- [SemVer](http://semver.org/) for versioning.

### Generate Release

```shell
npm run release
```

## Docker

### Generate development Docker image

```shell
npm run build:dev-image
```

### Generate production Docker image

```shell
npm run build:pro-image
```

### Docker compose

```shell
docker-compose up greeting
```

### Docker hub repository

[Greeting repository](https://hub.docker.com/repository/docker/yosama/greeting)
