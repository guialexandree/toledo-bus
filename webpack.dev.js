const { DefinePlugin } = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const dotenv = require('dotenv')
dotenv.config()

module.exports = merge(common, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}, 
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' }, 
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					{ loader: 'sass-loader' }
				]	
			}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		devMiddleware: {
			writeToDisk: true
		},
		static: {
			directory: './public'
		},
		historyApiFallback: true,
    port: 8080
	},
	plugins: [
		new DefinePlugin({
      'process.env': JSON.stringify(process.env)
		}),
		new HtmlWebPackPlugin({
			template: './template.dev.html'
		})
	]
})
