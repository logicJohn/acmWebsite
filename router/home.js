const express = require('express');
const router = express.Router();
const path = require('path');

const appDir = path.dirname(require.main.filename)

//router.use(express.static('../public/'));

router.get('/', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(appDir + '/public/pages/index.html');
    ;
});


router.get('/about', (req, res) => {
    res.sendFile(appDir + '/public/pages/about.html');
});
//router.post('/', (req, res) => {});

module.exports = router;



/*

res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

*/