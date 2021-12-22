var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res) {
  // TODO: check if exists and default to browser's language
  var translationFile = path.join(req.app.get('translation path'), req.query.language + '.json');
  // TODO: make async
  var translation = JSON.parse(fs.readFileSync(translationFile, 'utf8'));

  res.render('index', translation, function (err, html) {
    res.send(html);
  })
});

module.exports = router;
