var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	node: {
		fs: "empty" // https://github.com/josephsavona/valuable/issues/9
	},
	devtool: 'source-map',
	entry: {
		bundle: [ "./src/index.js" ]
	},
	output: {
		path: path.join(__dirname, "lib"),
		filename: "index.js"
	},
	externals: {
		 'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
         'mobx': {
            root: 'mobx',
            commonjs2: 'mobx',
            commonjs: 'mobx',
            amd: 'mobx'
        },
        'mobx-react': {
            root: 'mobx-react',
            commonjs2: 'mobx-react',
            commonjs: 'mobx-react',
            amd: 'mobx-react'
        }
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
		// new webpack.optimize.UglifyJsPlugin({
		// 	mangle: true,
		// 	beautify: true,
		// 	compress: {
		// 		warnings: false, // Suppress uglification warnings
		// 		pure_getters: true,
		// 		unsafe: true,
		// 		unsafe_comps: true,
		// 		screw_ie8: true
		// 	},
		// 	output: {
		// 		comments: false,
		// 	},
		// 	exclude: [/\.min\.js$/gi] // skip pre-minified libs
		// }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new BundleAnalyzerPlugin()
	]
};