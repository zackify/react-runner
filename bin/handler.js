#! /usr/bin/env node

switch(process.argv[2]) {
  case 'dev':
    return require('./dev-server')
  case 'init':
    return require('./init')
  default:
    return console.log('unknown command')
}