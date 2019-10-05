const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
        //publicPath: "/",
    },
    devServer: {
        contentBase: '/dist',
        port: 5050
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }

        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: "index.html"
    })]

}