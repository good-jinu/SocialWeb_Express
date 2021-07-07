var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const dbuserObj = require('../mysqlUserObject.js');
var connection = mysql.createConnection(dbuserObj);

router.post('/', function(req, res, next) {
  try {
    let sql = "SELECT * FROM users WHERE user=?"

    connection.query(sql, req.body.ID, (err, result, field)=>{
      if (err) {
        console.log('query wrong');
        throw err;
      }
      if(result[0]!=null) {
        res.send("<script>alert('ID is already exist!'); window.location.href = '/signup'</script>");
      }
      else {
        let sql = "INSERT INTO users(user, password) VALUES (?, ?)"

        connection.query(sql, [req.body.ID, req.body.PW], (err, result, field)=>{
          if (err) {
            console.log('query wrong');
            throw err;
          }
        });

        res.redirect('/login');
      }
    });
  }
  catch (exception) {
    console.log(exception);
    console.log('something is wrong');
  }
});

module.exports = router;
