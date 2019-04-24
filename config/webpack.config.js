const webpack = require('webpack');
const path = require('path');

const home=path.resolve(__dirname, '../src');
module.exports = {
	entry: home+ '/index.ts',
	context:home,
	module: {
		rules: [
			{
				include: [home],
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					babelrc: true
				},
				test: /\.(ts|js)$/
	}],
	resolve: {
        extensions: [ '.ts',  ".js", ".json"]
    },
	output: {
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js'
	},

	mode: 'development'

};
