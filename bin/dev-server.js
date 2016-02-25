#! /usr/bin/env node

const webpackEntry = process.cwd() + '/' + process.argv[3]

require('../modules/dev-server/server.js')({ 
  webpackEntry 
})