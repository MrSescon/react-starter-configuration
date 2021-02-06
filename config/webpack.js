const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        }
      }
    ],
  },
  mode: 'development',
    devServer:{
      port:3000,
      historyApiFallback: {
        index: 'index.html'
      }
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ],
}