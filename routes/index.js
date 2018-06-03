var express = require('express');
var router = express.Router();

var uuidv4 = require('uuid/v4');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET simple integration page. */
router.get('/simple', (req, res, next) => {
  var csrf = uuidv4();
  res.render('simple', {
    csrf: csrf
  });
});

/* GET custom integration page. */
/* GET simple integration page. */
router.get('/custom', (req, res, next) => {
  var csrf = uuidv4();
  res.render('custom', {
    csrf: csrf
  });
});



module.exports = router;
