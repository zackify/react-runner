var exec = require('child_process').execSync
const options = { stdio: [ 0,1,2 ] }

exec('react-native run-android', options)
