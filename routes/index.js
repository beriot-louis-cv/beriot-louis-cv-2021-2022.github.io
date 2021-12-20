var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

var translationsPath = '/views/translations';
var translationFile = path.join(__dirname, translationsPath, "en.json");
// TODO: make async
var translation = JSON.parse(fs.readFileSync(translationFile, 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(translation);
  res.render('test', translation, function (err, html) {
    res.send(html);
  })
});

module.exports = router;
