var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const got = require('got');
const stream = require('stream');
const Pokemons = require('./models/pokeSchema');
const mongoose = require('mongoose');


var routes = require('./routes/index');
var pokemon = require('./routes/pokemon');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {index: '_'}));

/*
app.use((req, res, next) => {
  req.db = mongoose.connect('mongodb://localhost/Pokesite');
  next();
});
*/

app.use('/', routes);
app.use('/pokemon', pokemon);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next();
});



module.exports = app;
