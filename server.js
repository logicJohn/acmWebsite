// jshint esversion: 6
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('file-system');
const home = require('./router/home.js');
const spark = require('./router/spark.js');
//const db = require('./router/db.js');

//log is personally written to test out different logging levels
//const log = require('./modules/logger.js');
const winston = require('./config/winston');
const app = express();

app.use(morgan('[:date[clf]] :remote-addr - :remote-user  ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" ', {
    stream: winston.stream
}));
app.use('/', home);
app.use('/spark', spark)
//app.use('/db', db);

//PORT AND HOST MY NEED TO BE CHANGED FOR DOCKERFILE
const port = (process.env.PORT || 4000);
const myhost = '0.0.0.0';
app.listen(port, myhost, () => {
    winston.info(`Website is listening at http://${myhost}:${port}...`);
    //log.msg(`Website is listening at http://${myhost}:${port}...`);

});