

// jshint esversion: 6
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('file-system');



//log is personally written to test out different logging levels
//const log = require('./modules/logger.js');
const winston = require('./config/winston');


const app = express();


app.use(morgan('[:date[clf]] :remote-addr - :remote-user  ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" ', { stream: winston.stream }));


//router
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res, next) => {
    winston.info('request app.get \\ req');
    //res.sendFile(path.join(__dirname + '/pages/index.html'));

    fs.readFile(__dirname + '/public/pages/index.html', (err, data) => {
        
        if (err) {
            winston.info(err);
            next(err); //Pass error to express
        }
        else {

            //res.send('hello World\n');
            res.sendFile(path.join(__dirname+'/public/pages/index.html'));
            winston.info('request app.get \\ res');
        }
    });  

    
});


//PORT AND HOST MY NEED TO BE CHANGED FOR DOCKERFILE
const port = (process.env.PORT || 4000);
const myhost = '0.0.0.0';
app.listen(port, myhost, ()  => {
    winston.info(`Website is listening at http://${myhost}:${port}...`);
    //log.msg(`Website is listening at http://${myhost}:${port}...`);
    
});

