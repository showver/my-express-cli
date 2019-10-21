const resModel = require('../config/HttpRespose');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('../redis');

/**
 * 检测session请求中的session是否过期,即是否为 null 或 undefined
 * 不符合规则的请求都需要在登陆后才能执行
 */
exports.checkLogin = (req, res, next) => {
    if(req.url!='/login'){
        console.log(req.session);
        const currentAccount = req.session.userinfo;
        const isLogin = req.session.userinfo;
        if (!currentAccount || !isLogin || currentAccount === undefined || isLogin === undefined) {
            return res.send(resModel.FormatRes('请重新登录!', resModel.NEEDRESIGNIN)).end();
        } else {
            console.log('Account: ' + currentAccount);
        }
    }
    next();
};


/**
 * 设置session，刷新session
 */
exports.refresh = (age) => {
    return session({
        secret: 'Shenzhen CarFansTech.co',
        resave: true,                          // 在过期前若未修改则不进行保存
        rolling: true,
        saveUninitialized: true,
        cookie: {maxAge: age || 5*1000},       // 过期时间(毫秒),默认一天
        store: new RedisStore({client: redisClient})
    });
};