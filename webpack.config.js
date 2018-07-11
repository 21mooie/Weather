var path = require('path')

module.exports = {
    context: path.resolve('js'),
    entry: ["./utils", "./main"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public'
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