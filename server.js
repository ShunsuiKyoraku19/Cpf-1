const express = require('express');
const app = express();
const port = 5500;

const db = require('./db');
const api = require('./api');

app.use('/', api);

const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + 'public', 'index.html'));
});

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});

