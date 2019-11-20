import { args, config } from "./utils";
import TerserPlugin from "terser-webpack-plugin";

const dirs = config.directories;
const entries = config.entries;

const WebpackConfig = {
	mode: !args.production ? "development" : "production",
	devtool: !args.production ? "cheap-eval-source-map" : false,
	output: {
		filename: "[name].js"
	},
	optimization: {
		splitChunks: {
			// include all types of chunks
			chunks: "all"
		},
		minimize: true
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	}
};

if (args.production) {
	WebpackConfig.plugins.push(
		new TerserPlugin({
			cache: true,
			parallel: true,
			extractComments: "all"
		})
	);
}

module.exports = WebpackConfig;
