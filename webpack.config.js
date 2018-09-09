const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = env => {
  const isProduction = env === 'prod'
  let config = {
    entry: {
      app: './src/main.js'
    },
    mode: isProduction ? 'production' : 'development',
    output: {
      filename: isProduction
        ? 'static/js/[name].bundle.js'
        : '[name].bundle.js',
      path: resolve('dist'),
      chunkFilename: isProduction
        ? 'static/js/[id].bundle.js'
        : '[id].bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': resolve('src'),
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: resolve('src'),
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('node_modules/vue-awesome')]
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'static/img/[name].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'static/font/[name].[ext]'
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProduction ? 'production' : 'development'
        )
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        favicon: 'src/assets/styles/img/favicon.png',
        inject: true
      }),
      new VueLoaderPlugin()
    ],
    node: {
      // console: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  }

  if (isProduction) {
    config.optimization = {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          common: {
            chunks: 'initial',
            name: 'common',
            minChunks: 2,
            minSize: 0
          },
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            priority: 10
          }
        }
      }
    }

    config.plugins = config.plugins.concat([
      new CleanWebpackPlugin(['dist'], {
        verbose: true
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[name].chunk.css'
      }),
      new OptimizeCssAssetsPlugin()
    ])
  } else {
    config.devServer = {
      host: 'localhost',
      port: '8080',
      hot: true,
      inline: true,
      contentBase: './dist'
    }

    config.plugins = config.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
      new FriendlyErrorsPlugin()
    ])
  }

  return config
}
