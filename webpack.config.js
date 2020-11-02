const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: [
    path.join(__dirname,'app','App.js')
  ],
  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js',
    publicPath: "/public"
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      path.resolve(__dirname, 'app'), 'node_modules'
    ]
  },
  // // DEV SERVER ENTRY POINT
  // devServer: {
  //   contentBase: path.resolve(__dirname),
  //   port: 3500,
  //   watchContentBase: true,
  //   open: true
  // }
};
