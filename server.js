const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const { sendMail } = require('./data/mailer')

app.prepare().then(() => {
    const server = express();

    server.use(compression());

    server.use(bodyParser.json());

    server.get('/sitemap.xml', (req, res) => {
        const sitemap = path.join(__dirname, 'public', 'sitemap.xml')
        app.serveStatic(req, res, sitemap)
    })

    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.post('/api/contact', sendMail);

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });
})