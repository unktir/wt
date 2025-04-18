var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var main_pageRouter = require('./routes/main-page');
var gallery_pageRouter = require('./routes/gallery-page');
var projects_pageRouter = require('./routes/projects-page');
var certifications_pageRouter = require('./routes/certifications-page');
var contact_pageRouter = require('./routes/contact-page');

var login_pageRouter = require('./routes/login-page');
var registration_pageRouter = require('./routes/registration-page');

var requests_router = require('./routes/requests');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
  key: 'user_sid', 
  secret: 'anypassword', 
  resave: false, 
  saveUninitialized: true, 
  cookie: { 
  signed: false, 
  maxAge: 600000
  } 
 }));

app.use('/', main_pageRouter);
app.use('/gallery', gallery_pageRouter);
app.use('/projects', projects_pageRouter);
app.use('/certifications', certifications_pageRouter);
app.use('/contact', contact_pageRouter);

app.use('/login', login_pageRouter);
app.use('/registration', registration_pageRouter);

app.use('/api/requests', requests_router);

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
