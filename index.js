

// jshint esversion: 6
const express = require('express');
const path = require('path');
const log = require('./modules/logger.js');



const app = express();


app.use(express.static(__dirname + '/pages'));
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/images'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});


const port = (process.env.PORT || 3000);
app.listen(port, () => {
    log.msg(`Website is listening at ${port}`);
});