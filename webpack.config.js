module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,  // 当前绝对路径
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};