const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: { extensions: [ '.tsx', '.ts', '.js', '.html', '.css' ] },
  devServer: {
    port: 3000
  },
  plugins: [new ExtractTextPlugin("styles.css")],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(html)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      }
    ]
  }
}
