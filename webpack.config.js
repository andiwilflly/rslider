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
	externals: {
		'react': 'React',
		'mobx': 'mobx',
		'lodash': '_',
		'mobx-react': 'mobx-react'
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
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			beautify: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true
			},
			output: {
				comments: false,
			},
			exclude: [/\.min\.js$/gi] // skip pre-minified libs
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		})
	]
};