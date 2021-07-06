var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const dbuserObj = require('../mysqlUserObject.js');
var connection = mysql.createConnection(dbuserObj);

router.post('/', function(req, res, next) {
  connection.connect((err)=>{
    if(err) throw err;
  });

  var sql = "INSERT INTO users(user, password) VALUES (?, ?)"

  connection.query(sql, [req.body.ID, req.body.PW], (err, result, field)=>{
    if (err) throw err;
  });

  connection.end();

  res.redirect('/login');

});

module.exports = router;
