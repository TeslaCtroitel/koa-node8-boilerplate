# Boilerplate for NodeJS 8+ with Koa, Babel and Docker

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![codestyle](https://img.shields.io/badge/codestyle-airbnb-brightgreen.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![Coverage Status](https://img.shields.io/coveralls/CheerlessCloud/koa-node8-boilerplate.svg?style=flat-square)]()
[![dependencies Status](https://david-dm.org/CheerlessCloud/koa-node8-boilerplate/status.svg?style=flat-square)](https://david-dm.org/CheerlessCloud/koa-node8-boilerplate)
[![devDependencies Status](https://david-dm.org/CheerlessCloud/koa-node8-boilerplate/dev-status.svg?style=flat-square)](https://david-dm.org/CheerlessCloud/koa-node8-boilerplate?type=dev)

[![node](https://img.shields.io/badge/node-8.x-brightgreen.svg?style=flat-square)]()
[![npm](https://img.shields.io/badge/npm-5.x-blue.svg?style=flat-square)]()

[![Sponsor](https://app.codesponsor.io/embed/jkPpzosXxwDBBaBNpoqWKCXd/CheerlessCloud/koa-node8-boilerplate.svg)](https://app.codesponsor.io/link/jkPpzosXxwDBBaBNpoqWKCXd/CheerlessCloud/koa-node8-boilerplate)

Boilerplate for NodeJS HTTP RESTful API based on Koa.

Out of box support:
- [**Koa**](http://koajs.com/) with [**koa-bodyparser**]() and [**koa-router**](https://github.com/alexmingoia/koa-router)
- [**Bluebird**](https://github.com/petkaantonov/bluebird) promises
- [**ESlint**](https://github.com/eslint/eslint) with [**Airbnb styleguide**](https://github.com/airbnb/javascript) for linting
  - [**Babel-eslint**](https://github.com/babel/babel-eslint) parser
  - [**eslint-plugin-jsdoc**](https://github.com/gajus/eslint-plugin-jsdoc)
  - [**eslint-plugin-babel**](https://github.com/babel/eslint-plugin-babel)
  - [**eslint-plugin-json**](https://github.com/azeemba/eslint-plugin-json)
- [**Lint-staged**](https://github.com/okonet/lint-staged) for run linting on staged files before commit
- [**Babel v6**](https://github.com/babel/babel) with some plugins for transpiling your code
  - [**babel-preset-env**](https://github.com/babel/babel-preset-env) configured for NodeJS 8.x
  - [**babel-preset-stage-0**](https://babeljs.io/docs/plugins/preset-stage-0/)
  - [**babel-register**](https://babeljs.io/docs/usage/babel-register/)
- [**Docker**](https://www.docker.com/) (*Dockerfile*, *docker-compose*)
- Tests with [**Ava**](https://github.com/avajs/ava) and [**Supertest**](https://github.com/visionmedia/supertest) for HTTP
- [**Nyc**](https://github.com/istanbuljs/nyc) for grub test coverage and [**Coveralls**](https://coveralls.io/) plugin
- [**Husky**](https://github.com/typicode/husky) for run tests before commit
- Simple [**TravisCI**](https://travis-ci.org) config
- [**EditorConfig**](http://editorconfig.org/)
- [**Twconf**](https://github.com/CheerlessCloud/twconf) for managment app configuration
- JSON logging with [**Bunyan**](https://github.com/trentm/node-bunyan) (in dev environment human-readable  output format)
- [**Semantic-release**](https://github.com/semantic-release/semantic-release) with [**customizable-commit-analyzer**](https://github.com/BublTechnology/customizable-commit-analyzer) for automate publishing releases to npm (yes, it looks like an extra functionality for the http server, but you can easily remove it)
- [**Cross-env**](https://github.com/kentcdodds/cross-env) for sets and use environment variables across platforms
- [**NSP**](https://github.com/nodesecurity/nsp) for identify known vulnerabilities in your dependencies (run by git hook on every push)

#### Bleeding edge
If you want to use most newest features of js ecosystem, you may check out "bleeding-edge" branch. For now, there Babel v7 alpha with [new proposals](https://github.com/tc39/proposals).
