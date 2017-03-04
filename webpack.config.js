const path = require('path');

module.exports = {
    target: 'web',

    entry: [
        'babel-polyfill',
        './src/main.jsx',
    ],

    output: {
        path: path.join(process.cwd(), '/dist'),
        pathInfo: true,
        publicPath: '/dist/',
        filename: 'main.js',
    },

    resolve: {
        root: path.join(__dirname, ''),
        modulesDirectories: [
            'node_modules',
            'src',
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    },

    plugins: [],

    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            }],

        noParse: /\.min\.js/,
    },
};
