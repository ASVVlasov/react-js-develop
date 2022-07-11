const path = require('path');

module.exports = {
    entry: './src/init.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.join(__dirname, '/dist'),
        clean: true,
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
