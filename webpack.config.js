const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./src/web/private/index.js",
    output: {
        path: path.resolve(__dirname, "src/web/public/js"),
        filename: "index.js"
    },
    performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/,/core/],
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // },
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