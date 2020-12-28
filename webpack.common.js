const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

  module.exports = {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options:{
                    name :'[name].[ext]',
                    outputPath: 'images',
                    publicPath: 'images',
                    emitFile:true,
                    esModule: false
                }
              },
            ],
          },
      ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
}