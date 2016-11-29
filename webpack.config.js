var path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
    ]
  }
};
