const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {
      src: path.resolve(__dirname, "src/"),
      utils: path.resolve(__dirname, "src/utils/"),
      components: path.resolve(__dirname, "src/components/"),
      services: path.resolve(__dirname, "src/services/"),
      views: path.resolve(__dirname, "src/views/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: false,
      favicon: "./public/icons/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
};
