var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const dbuserObj = require('../mysqlUserObject.js');

const login = require('./login.js');
const signup = require('./signup.js');
const login_p = require('./login_process.js');
const signup_p = require('./signup_process.js');
const logout_p = require('./logout_process.js');
const upload = require('./upload.js');
const upload_p = require('./upload_process.js');

router.use('/login', login);
router.use('/signup', signup);
router.use('/login_process', login_p);
router.use('/signup_process', signup_p);
router.use('/logout_process', logout_p);
router.use('/upload', upload);
router.use('/upload_process', upload_p);
/* GET home page. */
router.get('/', function(req, res, next) {
  var connection = mysql.createConnection(dbuserObj);

  var sql = "SELECT title, main_content FROM contents ORDER BY contentCode DESC, title";

  connection.query(sql, (err, result, field)=> {
    if(req.session.userID==undefined || req.session.userID == null) {
      res.render('index.pug', { title: 'website',
        sec_con: 'main',
        isLogin: false,
        ID: '',
        main_contents: result
      });
    }
    else {
      res.render('index.pug', {title: 'website',
        sec_con: 'main',
        isLogin: true,
        ID: req.session.userID,
        main_contents: result
      });
    }
  });

});

module.exports = router;
