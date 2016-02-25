#! /usr/bin/env node

switch(process.argv[2]) {
  case 'init':
    return require('./init')
  default:
    return require('./run')
}