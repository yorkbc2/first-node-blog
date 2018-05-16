const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname + '/'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['css-loader', 'style-loader']
			}
		]
	}
}