const webpack = require('webpack')

const path = require('path')

const imageLoaderConfiguration = require('./loaderConfiguration')
  .imageLoaderConfiguration
const babelLoaderConfiguration = require('./loaderConfiguration')
  .babelLoaderConfiguration

module.exports = {
  // ...the rest of your config

  entry: [path.resolve(__dirname, '../AppWeb.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        // Add xevery directory that needs to be compiled by Babel during the build
        include: [path.resolve(__dirname, '/')],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            // This aliases 'react-native' to 'react-native-web' and includes only
            // the modules needed by the app
            plugins: ['react-native-web'],
            // The 'react-native' preset is recommended (or use your own .babelrc)
            presets: ['react-native']
          }
        }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /node_modules\/apollo-link.*?\/lib\/.*?.js/,
        loader: 'string-replace-loader',
        options: {
          search: 'exports.Observable = Observable',
          replace: 'exports.Observable = Observable.default'
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: ['.web.js', '.js']
  }
}
