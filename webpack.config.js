var path = require('path');
var webpack = require('webpack');


module.exports = {
	node: {
		fs: 'empty' // https://github.com/josephsavona/valuable/issues/9
	},
	entry: {
		bundle: [ './lib/index.js' ]
	},
	output: {
		path: path.join(__dirname, "src"), // This is where images AND js will go
		filename: 'index.js'
	},
	stats: {
		colors: true,
		reasons: true
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /\/node_modules\//,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
};