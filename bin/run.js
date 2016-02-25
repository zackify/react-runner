#! /usr/bin/env node
const component = process.argv[2]

//run for react native 
if(component == 'android' || component == 'ios') {
  var exec = require('child_process').execSync
  const options = { stdio: [ 0,1,2 ] }

  exec(`react-native run-${component}`, options)
}

//run dev server
const webpackEntry = process.cwd() + '/' + component

require('../modules/dev-server/server.js')({ 
  webpackEntry 
})