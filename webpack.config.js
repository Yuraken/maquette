const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
          rules: [    
              {
                  test: /\.css$/,
                  use: [MiniCssExtractPlugin.loader,'css-loader'],    
                },
                {
                             test: /\.(png|svg|jpg|gif)$/,
                             use: [
                               'file-loader',
                             ],
                           },

            ],
            
        },
        
        plugins: [ 
                new CleanWebpackPlugin(),
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    inject: true,
                    filename: 'index.html'  
                }),
                new HtmlWebpackPlugin({
                  template: './src/connexion.html',
                  inject: true,
                  filename: 'connexion.html'  
              }),
                new MiniCssExtractPlugin(),
            ],
      devServer: {
          contentBase: path.join(__dirname, 'dist'),
        }
    };

    