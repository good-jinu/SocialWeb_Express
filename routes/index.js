var express = require('express');
var router = express.Router();

const login = require('./login.js');
const signup = require('./signup.js');
const login_p = require('./login_process.js');
const signup_p = require('./signup_process.js');
const logout_p = require('./logout_process.js');

router.use('/login', login);
router.use('/signup', signup);
router.use('/login_process', login_p);
router.use('/signup_process', signup_p);
router.use('/logout_process', logout_p);
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.userID==undefined || req.session.userID == null) {
    res.render('index.pug', { title: 'website',
      sec_con: 'main',
      isLogin: false,
      ID: ''
    });
  }
  else {
    res.render('index.pug', {title: 'website',
      sec_con: 'main',
      isLogin: true,
      ID: req.session.userID
    });
  }
});

module.exports = router;
