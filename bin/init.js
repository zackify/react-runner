var fs = require('fs')
var exec = require('child_process').execSync
const options = { stdio: [ 0,1,2 ] }

if(!fs.existsSync(process.cwd() + '/package.json')) exec('npm init', options)
exec('npm install react --save', options)
exec('npm install react-dom --save', options)
exec('npm install babel-preset-es2015 --save', options)
exec('npm install babel-preset-react --save', options)
exec('npm install babel-loader --save', options)
exec('npm install babel-core --save', options)
exec('npm install webpack --save', options)
exec('npm install webpack-dev-server --save-dev', options)
exec('npm install react-hot-loader --save-dev', options)
