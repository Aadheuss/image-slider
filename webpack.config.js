const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./image-slider.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["./*.html"],
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Image-Slider",
      template: "./index.html",
    }),
  ],
  output: {
    filename: "image-slider.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
};
