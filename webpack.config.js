const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: 'public',
        filename: 'bundle.js'
    },
    resolve: {
        alias:{
            'media': path.resolve(__dirname, 'src/media'),
        }
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/ 
        },
        {
            test: /\.jpg$/,
            loader: 'file-loader',
            include : path.join(__dirname, 'src')
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
        },
        ],
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public')
    }
}