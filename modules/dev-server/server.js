module.exports = config => {

  var WebpackDevServer = require("webpack-dev-server");
  var webpack = require("webpack");

  var compiler = webpack(require('./webpack.default.config.js')(config));
  var server = new WebpackDevServer(compiler, {
    contentBase: __dirname,
    hot: true,
    inline: true,
    historyApiFallback: true,
    publicPath: "/assets/",
  });
  server.listen(8080, "localhost", function() {});
}