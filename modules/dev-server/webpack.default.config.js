var webpack = require('webpack')
var path = require('path')

module.exports = config => {
  return {
    entry: [
      __dirname + '/../../node_modules/webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
      __dirname +'/../../node_modules/webpack/hot/only-dev-server',
      config.webpackEntry,
    ],
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/assets/",
      filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx|.js$/,
          exclude: /node_modules/,
          loader:  'react-hot-loader',
        },
        {
          test: /\.jsx|.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: [
              "react",
              "es2015"
            ]
          }
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}