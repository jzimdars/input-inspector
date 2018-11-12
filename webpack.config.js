const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const publicPath = path.resolve(__dirname, "public")
module.exports = {
  entry: {
    main: "./src/index.js"
  },

  output: {
    filename: "[name]-[contenthash].js",
    chunkFilename: "[name]-[contenthash].js",
    path: publicPath
  },

  mode: "production",
  devtool: "source-map",

  module: {
    rules: [
      {
           test: /\.js$/,
        exclude: /node_modules/,
            use: "babel-loader",
      },
      {
           test: /\.css$/,
        exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  devServer: {
    hot: false,
    contentBase: publicPath
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/profile.html",
      filename: "profile.html"
    })
  ]
}
