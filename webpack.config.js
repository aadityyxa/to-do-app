var path = require('path'); 

module.exports = {
    mode: 'development',
    entry: {
        main:'./src/index.js'
    },
    devtool:'inline-source-map',
    devServer:{
        static: './dist'
    },
    output: {
        filename: '[name].js', 
        path:path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}