const app = require('express')();

app.get('/', (req, res) => {
    res.send('<h1>Hello Pritam!</h1>');
});

app.listen(3000,() => {
    console.log('App is Running on port number 3000');
})