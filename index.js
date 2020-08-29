const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const myReadStream = fs.createReadStream(__dirname + '/index.html',  'utf8');
    myReadStream.pipe(res);
});

app.get('/assets', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const myReadStream = fs.createReadStream(__dirname + '/assets/images',  'utf8');
    myReadStream.pipe(res);
});

app.listen(3000,() => {
    console.log('App is Running on port number 3000');
})