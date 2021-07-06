var express = require('express');
var router = express.Router();

const login = require('./login.js');
const signup = require('./signup.js');
const login_p = require('./login_process.js');
const signup_p = require('./signup_process.js');

router.use('/login', login);
router.use('/signup', signup);
router.use('/login_process', login_p);
router.use('/signup_process', signup_p);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyWeb',
    sec_con: 'main'}
  );
});

module.exports = router;
