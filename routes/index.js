var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();


router.get('/', function(req, res) {

  //TODO: move this somewhere more appropriate
  const translationPath = req.app.get('translation path');

  // get full path to translation file
  let translationFile = path.join(translationPath, req.query.language + '.json');

  var translation = ()=>{

    // if translation file exists, return its content
    if (fs.existsSync(translationFile)) {
      return JSON.parse(fs.readFileSync(translationFile, 'utf8'));

    } else {
      
      // getting a list of all the translation files
      const availableLanguages = []
      fs.readdirSync(translationPath, 'utf8').forEach(file => {
        let fileName = file.split('.', 1);
        availableLanguages.push(fileName);
      });
      
      //TODO: acceptslanguages returns false if nothing exists so make this whole bit a function instead
      // if the queried language doesn't exists, get the browser languages and see if a translation exists
      translationFile = path.join(translationPath, req.acceptsLanguages(availableLanguages) + '.json');
      if (fs.existsSync(translationFile)) {
        return JSON.parse(fs.readFileSync(translationFile, 'utf8'));

      } else {
        // if all else fails, give english translation
        translationFile = path.join(translationPath, 'en' + '.json');
      }
    };
  }
  

  res.render('index', translation(), function (err, html) {
    res.send(html);
  })
});

module.exports = router;
