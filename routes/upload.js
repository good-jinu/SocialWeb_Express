var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index.pug', {title: 'website-upload',
    sec_con: 'upload',
    isLogin: true,
    ID: req.session.userID
  });
});

module.exports = router;
