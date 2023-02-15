const { DefinePlugin } = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebPackPlugin = require('favicons-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}, 
			{
				test: /\.scss$/,
				use: [{
						loader: MiniCssExtractPlugin.loader
					},
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
	externals: {
		react: 'React',
    axios: 'axios',
    recoil: 'Recoil',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
	},
	plugins: [
		new DefinePlugin({
			'process.env.API_URL': JSON.stringify('https://localhost:5050/api')
		}),
		new HtmlWebPackPlugin({
			template: './template.prod.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'main-bundle-[hash].css'
		}),
		new FaviconsWebPackPlugin({
			logo: './favicon.png'
		})
	]
})
