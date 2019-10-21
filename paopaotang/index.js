const express = require('express');

const app = express();

app.use('/', (req, res) => {
    console.log('안녕 hello');
})

app.listen(5000, () => {
    console.log('server on 5000');
})
