"use strict";
const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: "source-map",
  target: "node",
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack")
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  externals: ["encoding"],
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  }
};
