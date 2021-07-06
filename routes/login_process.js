var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const dbuserObj = require('../mysqlUserObject.js');
var connection = mysql.createConnection(dbuserObj);

router.post('/', function(req, res, next) {
  connection.connect((err)=>{
    if(err) throw err;
  });

  var sql = "SELECT * FROM users WHERE user=? AND password=?"

  connection.query(sql, [req.body.ID, req.body.PW], (err, result, field)=>{
    if (err) throw err;

    req.session.userID=req.body.ID;
  });

  connection.end();

  res.redirect('/');
});

module.exports = router;
