const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
        ? 'static/js/[name].[chunkhash].js'
        : '[name].bundle.js',
      path: resolve('dist'),
      chunkFilename: isProduction
        ? 'static/js/[name].[chunkhash].js'
        : '[id].bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': resolve('src'),
        bootstrap: resolve('node_modules/bootstrap'),
        'vue-router': resolve('node_modules/vue-router'),
        'vue-awesome': resolve('node_modules/vue-awesome'),
        vuex: resolve('node_modules/vuex'),
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
          exclude: /node_modules/,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          include: [resolve('src'), resolve('node_modules/vue-awesome')],
          options: {
            cacheDirectory: resolve('./cache-loader'),
            cacheIdentifier: 'cache-loader:{version} {precess.env.NODE_ENV}'
          }
        },
        {
          test: /\.js$/,
          use: isProduction
            ? [
              {
                loader: 'cache-loader',
                options: {
                  cacheDirectory: resolve('cache-loader')
                }
              },
              'babel-loader'
            ]
            : 'babel-loader',
          exclude: /node_modules/,
          include: resolve('src')
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
        inject: true,
        chunksSortMode: 'dependency'
      }),
      new VueLoaderPlugin()
    ]
  }

  if (isProduction) {
    config = merge(config, {
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false
          }),
          new OptimizeCssAssetsPlugin({})
        ],
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
            },
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
      },
      plugins: [
        new CleanWebpackPlugin(['dist'], {
          verbose: true
        }),
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[hash].css',
          chunkFilename: 'static/css/[name].[hash].css'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
      ]
    })
  } else {
    config = merge(config, {
      devServer: {
        host: 'localhost',
        port: '8080',
        hot: true,
        inline: true,
        // publicPath: 'static',
        contentBase: './dist',
        compress: true
      },
      devtool: 'eval-source-map',
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new FriendlyErrorsPlugin()
      ]
    })
  }

  return config
}
