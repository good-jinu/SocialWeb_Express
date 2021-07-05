var express = require('express');
var router = express.Router();

const login = require('./login.js');

router.use('/login', login);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyWeb',
    sec_con: 'main'}
  );
});

module.exports = router;
