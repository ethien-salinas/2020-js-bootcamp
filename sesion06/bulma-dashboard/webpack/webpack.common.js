const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/views/index.html' }),
    new HtmlWebpackPlugin({
      template: './src/views/dashboard.html',
      filename: 'dashboard.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/views/books.html',
      filename: 'books.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/views/customers.html',
      filename: 'customers.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/views/orders.html',
      filename: 'orders.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  }
}