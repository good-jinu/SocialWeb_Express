var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const dbuserObj = require('../mysqlUserObject.js');
var connection = mysql.createConnection(dbuserObj);

router.post('/', function(req, res, next) {

  let sql = "SELECT * FROM contents WHERE user=?"

  connection.query(sql, req.session.userID, (err, result, field)=>{
    if (err) throw err;

    var conIndex = result.length;

    let sql = "INSERT INTO contents(contentCode, title, main_content, user) VALUES (?, ?, ?, ?)";

    connection.query(sql, [conIndex, req.body.title, req.body.content, req.session.userID], (err, result, field)=>{
      if(err) throw err;
    })
  });
});

module.exports = router;
