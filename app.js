const sessionMiddleware = require('./middleware/session');
const tokenMiddleware = require('./middleware/token');
const createError = require('http-errors');
const express = require('express');
const router = require('./routes');

const logger = require('morgan');
// const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const multer = require('multer');
const path = require('path');

const app = express();

//设置跨域访问
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  req.method == 'OPTIONS' ? res.send(200) : next()
});

// 引入中间件
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('Shenzhen CarFansTech.co'));
// app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// 设置session，刷新session
app.use(sessionMiddleware.refresh());

// 检验session是否存在,若不存在则拦截请求,提示重新登录。
app.use((req, res, next) => {
  sessionMiddleware.checkLogin(req, res, next);
});


// 检验token是否存在,若不存在则拦截请求,提示重新登录。
// app.use(function(req,res,next){ 
//   tokenMiddleware.validate(req, res, next);
//   res.send('success'); 
// }); 

// 路由入口
router(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
