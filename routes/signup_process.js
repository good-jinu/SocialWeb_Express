var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const dbuserObj = require('../mysqlUserObject.js');

router.post('/', function(req, res, next) {
  try {
    var connection = mysql.createConnection(dbuserObj);
    console.log(dbuserObj);
    connection.connect((err)=>{
      if(err) {
	console.log('connect wrong');
	throw err;
      }
    });
    
    var sql = "INSERT INTO users(user, password) VALUES (?, ?)"

    connection.query(sql, [req.body.ID, req.body.PW], (err, result, field)=>{
      if (err) {
	console.log('query wrong');
	throw err;
      }
    });

    connection.end();

    res.redirect('/login');
  }
  catch (exception) {
    console.log(exception);
    console.log('something is wrong');
  }
});

module.exports = router;
