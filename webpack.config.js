const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, '/dist'),
        clean: true,
    },
    resolve: {
        fallback: {
            fs: false,
            process: false,
            readline: false,
        },
        extensions: ['.js', '.ts'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
