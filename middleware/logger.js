const timestamp = require('time-stamp');
const fs = require('fs');


exports.msg = function(message) {
    //add http request
    //add file logging
    console.log(timestamp('YYYY/MM/DD:mm:ss:ms') + '   ' + message);
};

