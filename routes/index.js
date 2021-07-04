var express = require('express');
var router = express.Router();

const users = require('./users.js');

router.use('/users', users);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyWeb' });
});

module.exports = router;
