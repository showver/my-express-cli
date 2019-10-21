const tokenMiddleware = require('../middleware/token');
module.exports = (app) => {

  // 获取用户的信息
  app.get('/', function (req, res) {
    // res.send('GET request to the homepage')
    console.log(req.session);
    let session = req.session;
    res.send('欢迎你：' + session.id);
  });

  // 获取用户的信息
  app.get('/login', function (req, res) {
    /*设置session*/
    req.session.userinfo=req.session.id; 
    res.send('登录成功');
    /*返回token*/
    // let Token = tokenMiddleware.makeToken(); 
    // res.json({result:"success",token:Token},200)
  });

  // 获取用户的信息
  app.use('/users', require('./users'));

}; 