import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: {
        index: './index.js'
    },
    plugins: [
        new HtmlWebpackPlugin()]
}
