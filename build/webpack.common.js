const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  entry: {
    app: "./src/main.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve("dist")
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "~": resolve("src"),
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src"), resolve("node_modules/vue-awesome")]
      },
      {
        test: /\.s?[ac]ss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new VueLoaderPlugin()
  ],
  node: {
    // console: 'empty',
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};
