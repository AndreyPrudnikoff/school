"use strict"
const http = require('http');
const db = require('./db');
const User = db.user;

const port = 8080;


const routing = {
    '/click': (req, res) => {
        res.writeHead(200, {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Headers': '*'
        })
        console.log(res.statusMessage);
        return {hello: "WORLD"};
    },
    '/create': (req, res) => {
        let body = [];
        req.on('data' , (chunk) => {
            body.push(chunk)
        }).on('end', () => {
            body = Buffer.concat(body).toString();
        })
        res.body = body;
        res.message = 'User created!'
        res.writeHead(200, {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Headers': '*'
        })
        console.log(res.body)
        return res.body;
    }
};

const types = {
    object: JSON.stringify,
    string: s => s,
    undefined: () => 'not found',
    function: (fn, req, res) => JSON.stringify(fn(req, res))
};

http.createServer((req, res) => {
    const data = routing[req.url];
    const type = typeof data;
    const serializer = types[type];
    const result = serializer(data, req, res);
    res.end(result);
}).listen(port);

db.sequelize.sync()
    .catch(err=> console.error(err));

console.log(`Server starting on port ${port}`);
