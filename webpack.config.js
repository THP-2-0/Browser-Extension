const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: "./src/popup.jsx"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/popup.html",
      filename: "popup.html",
      inject: true,
      chunks: ["popup"]
    }),
    new CopyPlugin([{ from: "src/manifest.json", to: "." }])
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  mode: 'production'
};