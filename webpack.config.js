module.exports = {
    entry: ["./js/utils.js", "./js/main.js"],
    output: {
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve:{
        extentions: ['','.js','.es6']
    }
}