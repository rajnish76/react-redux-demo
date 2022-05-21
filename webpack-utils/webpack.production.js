const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => ({
	output: {
		filename: 'production.[contenthash].js',
		chunkFilename: 'production.[contenthash].js'
	},
	module: {
		rules: [
			{
				test: /\.sa?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.[contenthash].css'
		}),
		new TerserPlugin(),
		new CleanWebpackPlugin()
	]
});
