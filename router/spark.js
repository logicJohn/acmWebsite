const express = require("express");
const router = express.Router();
const path = require("path");

const appDir = path.dirname(require.main.filename);

router.use(express.static(appDir + "/sparkPublic/"));

router.get("/", (req, res) => {
  //res.send('Hello World!');
  res.sendFile(appDir + "/sparkPublic/index.html");
});


module.exports = router;