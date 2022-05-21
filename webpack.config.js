const path = require('path');

// const webpack = require("webpack");
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfiguration = env => require(`./webpack-utils/webpack.${ env }`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
	return merge(
		{
			mode,
			entry: ['babel-polyfill', './src/index.js'],
			output: {
				publicPath: '/',
				path: path.resolve(__dirname, 'build'),
				filename: 'bundle.js'
			},
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						exclude: /node_modules/,
						loader: 'babel-loader'
					},
					{
						test: /\.(png|svg|jpg|jpeg|gif)$/,
						use: [
							{
								loader: 'file-loader',
								options: {
									name: '[name].[ext]',
									outputPath: 'img/'
								}
							}
						]
					},
					{
						test: /\.(eot|svg|ttf|woff|woff2|xlsx|otf)$/,
						use: [
							{
								loader: 'file-loader',
								options: {
									name: '[name].[ext]',
									outputPath: 'fonts/'
								}
							}
						]
					}
				]
			},
			plugins: [
				new HtmlWebpackPlugin({
					template: './public/index.html'
				})
				// new webpack.HotModuleReplacementPlugin()
			],
			resolve: {
				extensions: ['*', '.js', '.jsx'],
				symlinks: false
			},
			devServer: {
				open: true,
				historyApiFallback: true,
				port: 8080
				// proxy: {
				// 	'/api/*': {
				// 		target: 'https://xyz.com/',
				// 		changeOrigin: true,
				// 		secure: false,
				// 	},
				// },
			}
		},
		modeConfiguration(mode)
	);
};
