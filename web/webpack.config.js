const webpack = require('webpack')

const path = require('path')

const devServer = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: 3000
  }
}
module.exports = {
  // ...the rest of your config
  ...devServer,
  entry: [path.resolve(__dirname, '../AppWeb.js')],
  module: {
    rules: [
	{
        test: /node_modules\/apollo-link\/lib\/.*?.js/,
        loader: 'string-replace-loader',
        options: {
          search: 'exports.Observable = Observable',
          replace: 'exports.Observable = Observable.default'
        }
      },
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
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.js', '.js']
  }
}
