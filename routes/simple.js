var express = require('express');
var router = express.Router();
var uuidv4 = require('uuid/v4');

router.get('/simple', function(req, res, next) {
  var uuid = uuidv4();
  res.render('simple', { csrf: uuid });
});

module.exports = router;