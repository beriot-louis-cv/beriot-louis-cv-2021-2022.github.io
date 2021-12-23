var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res) {
  var translationFile = path.join(req.app.get('translation path'), req.query.language + '.json');
  var translation = ()=>{
    if (fs.existsSync(translationFile)) {
      return JSON.parse(fs.readFileSync(translationFile, 'utf8'));
    } else {
      //TODO: make a list of languages from available files
      translationFile = path.join(req.app.get('translation path'), req.acceptsLanguages('fr', 'nl', 'en') + '.json');
      if (fs.existsSync(translationFile)) {
        return JSON.parse(fs.readFileSync(translationFile, 'utf8'));
      } else {
        translationFile = path.join(req.app.get('translation path'), 'en' + '.json');
      }
    };
  }
  

  res.render('index', translation(), function (err, html) {
    res.send(html);
  })
});

module.exports = router;
