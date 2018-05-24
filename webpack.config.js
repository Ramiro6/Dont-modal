const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: { extensions: [ '.tsx', '.ts', '.js', '.html', '.css' ] },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
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
          fallback: 'style-loader',
          use: [
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                }
            },
            {
                loader: 'postcss-loader'
            }
        ]
        })
      }
    ]
  }
}
