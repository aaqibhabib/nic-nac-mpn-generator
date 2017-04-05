

const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const compress = require('compression');
const layouts = require('express-ejs-layouts');

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', { layout: 'layout' });
app.set('views', path.join(process.cwd(), '/server/views'));

app.use(compress());
app.use(layouts);
app.use('/client', express.static(path.join(process.cwd(), '/client')));
app.use(express.static('client/styles'));

app.disable('x-powered-by');

const env = {
    production: process.env.NODE_ENV === 'production',
};

if (env.production) {
    Object.assign(env, {
        assets: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'assets.json'))),
    });
}

app.get('/*', (req, res) => {
    res.render('index', {
        env,
    });
});

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
    console.log('server running at localhost:3001, go refresh and see magic');
});

if (env.production === false) {
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');

    const webpackDevConfig = require('./webpack.config.development');

    new WebpackDevServer(webpack(webpackDevConfig), {
        publicPath: '/client/',
        contentBase: './client/',
        inline: true,
        hot: true,
        stats: false,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Headers': 'X-Requested-With',
        },
    }).listen(3000, 'localhost', (err) => {
        if (err) {
            console.log(err);
        }

        console.log('webpack dev server listening on localhost:3000');
    });
}
