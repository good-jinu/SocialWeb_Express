var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyWeb-login',
    sec_con: 'signup'}
  );
});

module.exports = router;
