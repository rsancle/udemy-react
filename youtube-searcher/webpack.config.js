//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
    //'./src/sass/main.sass'

  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    // {
    //   test: /\.scss$/,
    //   loader: ExtractTextPlugin.extract('css!sass')
    // }
    ]
  },
  // plugins: [
  //       new ExtractTextPlugin({
  //           filename: 'public/style.css',
  //           allChunks: true
  //       })
  //   ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

};
