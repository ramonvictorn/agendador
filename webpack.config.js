const path = require('path');

module.exports = {
    entry: "./src/web/private/index.js",
    output: {
        path: path.resolve(__dirname, "src/web/public/js"),
        filename: "index.js"
    },
    performance: { hints: false },
    watch: false,
    optimization: {
      namedModules: false,
      namedChunks: false,
      nodeEnv: 'production',
      flagIncludedChunks: true,
      occurrenceOrder: true,
      sideEffects: true,
      usedExports: true,
      concatenateModules: true,
      splitChunks: {
        hidePathInfo: true,
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
      },
      noEmitOnErrors: true,
      checkWasmTypes: true,
      minimize: true,
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/,/core/],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: "./web/private/templates/index.ejs",
  //     filename: path.resolve(__dirname, "web/public/index.ejs"), //entrega
  //   })
  // ]
};