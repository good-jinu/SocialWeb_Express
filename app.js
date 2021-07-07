var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var session = require('express-session');
var MYSQLStore = require('express-mysql-session')(session);

var app = express();

var dbuserObj = require('./mysqlUserObject.js');
var sessionOption = {
  host: dbuserObj.host,
  port: 3306,
  user: dbuserObj.user,
  password: dbuserObj.password,
  database: dbuserObj.database
};

var sessionStore = new MYSQLStore(sessionOption);

app.use(
  session({
    key: "myKey",
    secret: "mySecret",
    store: sessionStore,
    resave: false,
    saveUninitialized: true
  })
);

var connection = mysql.createConnection(sessionOption);
var sessionStore1 = new MYSQLStore({}, connection);

var indexRouter = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
