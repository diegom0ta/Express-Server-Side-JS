const express = require('express');
const bodyParser = require('body-parser');

const fonxyRouter = express.Router();

fonxyRouter.use(bodyParser.json());

fonxyRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('GET! That\'s fonxy, huh!');
})
.post((req, res, next) => {
    res.end('POST! That\'s fonxy, huh! '+ req.body.name + req.body.desc);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT! That\'s NOT fonxy, huh!');
})
.delete((req, res, next) => {
    res.end('DELETE! That\'s fonxy, huh!');
});

module.exports = fonxyRouter;