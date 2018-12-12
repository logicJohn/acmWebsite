const express = require("express");
const router = express.Router();
const path = require("path");

const appDir = path.dirname(require.main.filename);

router.use(express.static(appDir + "/public/"));

router.get("/", (req, res) => {
  //res.send('Hello World!');
  res.sendFile(appDir + "/public/pages/index.html");
});

router.get("/mission", (req, res) => {
  res.sendFile(appDir + "/public/pages/mission.html");
});

router.get("/events", (req, res) => {
  res.sendFile(appDir + "/public/pages/events.html");
});

router.get("/members", (req, res) => {
  res.sendFile(appDir + "/public/pages/members.html");
});
//router.post('/', (req, res) => {});

module.exports = router;

/*

res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

*/
