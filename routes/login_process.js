var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const dbuserObj = require('../mysqlUserObject.js');
var connection = mysql.createConnection(dbuserObj);

router.post('/', function(req, res, next) {

  var sql = "SELECT * FROM users WHERE user=? AND password=?"

  connection.query(sql, [req.body.ID, req.body.PW], (err, result, field)=>{
    if (err) throw err;

    if(result[0]!=null){
      req.session.userID=result[0].user;
      req.session.save(function(){});
    }
  });

  res.redirect('/');
});

module.exports = router;
