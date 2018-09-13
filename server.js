

// jshint esversion: 6
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('file-system');

//log is personally written to test out different logging levels
//const log = require('./modules/logger.js');
const winston = require('./config/winston');


const app = express();


app.use(morgan('combined', { stream: winston.stream }));

app.set(express.static(__dirname + '/pages'));
express.static(__dirname + '/styles');
express.static(__dirname + '/images');

app.get('/', (req, res, next) => {
    
    //res.sendFile(path.join(__dirname + '/pages/index.html'));

    fs.readFile(__dirname + '/pages/index.html', (err, data) => {
        
        if (err) {
            
            next(err); //Pass error to express
        }
        else {

            res.send('hello World\n');
            //res.sendFile(data);

            
        }
    });  

    
});


//PORT AND HOST MY NEED TO BE CHANGED FOR DOCKERFILE
const port = (process.env.PORT || 3000);
const myhost = '0.0.0.0';
app.listen(port, myhost, ()  => {
    //log.msg(`Website is listening at http://${myhost}:${port}...`);
    console.log("hello world");
});

