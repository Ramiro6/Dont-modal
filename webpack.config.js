const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: { extensions: [ '.tsx', '.ts', '.js' ] },
  devServer: {
    port: 3000
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env', 'stage-2'] }
        }
      }
    ]
  }
}
