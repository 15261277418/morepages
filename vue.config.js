//  vue.config.js
const path = require("path")
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const productionGzipExtensions = ['js', 'css'];
module.exports = {
	outputDir: './dist',
	publicPath: '/',
	productionSourceMap: false,
	pages: {
		index: {
			entry: "src/main.js",
			template: "public/index.html",
			filename: "index.html",
			title: "总项目"
		},
		firstFile: {
			entry: "src/pages/firstFile/main.js",
			template: "public/index.html",
			filename: "firstFile.html",
			title: "第一个文件"
		},
		secondFile: {
			entry: "src/pages/secondFile/main.js",
			template: "public/index.html",
			filename: "secondFile.html",
			title: "第二个文件"
		}
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set("@components", path.join(__dirname, "./src/components"))
			.set("@styles", path.join(__dirname, "./src/styles"))
			.set("@assets", path.join(__dirname, "./src/assets"))
			.set("@images", path.join(__dirname, "./src/assets/images"))
			.set("@", path.join(__dirname, "src"))
	},
	// configureWebpack: config => {
	// 	config.plugins.push(new CompressionWebpackPlugin({
	// 		algorithm: 'gzip',
	// 		test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
	// 		threshold: 10240,
	// 		minRatio: 0.8
	// 	}))
	// 	config.plugins.push(
	// 		new UglifyJsPlugin({
	// 			uglifyOptions: {
	// 				compress: {
	// 					warnings: false,
	// 					drop_debugger: true,
	// 					drop_console: true,
	// 					pure_funcs: ['console.log']
	// 				},
	// 			},
	// 			sourceMap: false,
	// 			parallel: true,
	// 		})
	// 	)
	// }
	// configureWebpack: config => {
	// 	if (process.env.VUE_APP_domain == 'DEV') {
	// 		return {
	// 			plugins: [new CompressionPlugin({
	// 				test: /\.js$|\.html$|\.css/,
	// 				threshold: 10240, // 对超过10k的文件进行压缩
	// 				deleteOriginalAssets: false // 是否删除原资源
	// 			})]
	// 		}
	// 	}
	// },
}
