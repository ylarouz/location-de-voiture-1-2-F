// var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');



var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// ll 
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname)));

// app.use(express.static(path.join(__dirname, 'public','images','images')));
app.use(express.static(path.join(__dirname, 'public','images')));
app.use(express.static(path.join(__dirname, 'public','javascripts')));
app.use(express.static(path.join(__dirname, 'public','stylesheets')));

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



module.exports = app;
app.listen(3000,()=> console.log('server is run ...'));


