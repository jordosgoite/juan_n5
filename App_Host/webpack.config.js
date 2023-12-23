const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const exportedDependencies = require("./src/helpers/exportedComponents");

module.exports = {
  entry: "./src/entry.js",
  mode: "development",
  resolve: {
    extensions: [".css", ".scss", ".js", ".jsx"],
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith("data:")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new ModuleFederationPlugin({
      name: "APP_HOST",
      remotes: {
        Naruto: "Naruto@http://localhost:3001/remoteEntry.js",
        Monsters: "Monsters@http://localhost:3002/remoteEntry.js",
      },
      filename: "remoteEntry.js",
      exposes: exportedDependencies,
      shared: {
        "styled-components": {
          singleton: true,
          requiredVersion: deps["styled-components"],
        },
      },
    }),
  ],
};
