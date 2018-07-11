module.exports = {
    entry: ["./js/utils.js", "./js/main.js"],
    output: {
        filename: "bundle.js"
    },
    module:{
        rules:[
            // {
            //     enforce:'pre',
            //     test: /\.es6$/,
            //     exclude: /node_modules/,
            //     use:[
            //         {
            //             loader: "jshint-loader"
            //         }
            //     ]
                
            // },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: "babel-loader"
                    }
                ]
                
            }
            
        ]
    },
    resolve:{
        extensions: ['.js','.es6']
    }
}