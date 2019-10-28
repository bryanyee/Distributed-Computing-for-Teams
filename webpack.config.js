module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css|scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      }
    ]
  },
  watch: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'] // Allow js & jsx imports without the file extension
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true
  }
};


