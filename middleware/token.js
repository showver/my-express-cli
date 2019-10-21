const resModel = require('../config/HttpRespose');
const jwt = require('jwt-simple');
const secret = "Shenzhen CarFansTech.co";
const time = 1;
module.exports = { 
    /*
    *检验token合法性
    */ 
    validate:function(req,res,next){ 
        if(req.url!=="/favicon.ico" && req.url!=='/login'){
            let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers["xssToken"];
            if(token){ 
                let decodeToken = null;
                let now = new Date().getTime();
                try { //防止假冒token解析報錯 
                    decodeToken = jwt.decode(token,secret,'HS256'); 
                } catch (err) { 
                    res.status(401).send("非法访问"); return; 
                } 
                let exp = decodeToken.exp; 
                if(!exp){
                    res.status(401).send("token过期"); return; 
                }
                if(exp>(now+time*60*1000)){
                    res.send(resModel.FormatRes('授权超时!', resModel.NEEDRESIGNIN)).end();
                    // res.send({code:'002',"errorMsg":"授权超时"})
                }
                next();
            }else{ 
                res.status(401).send("token不存在"); return;
            }
        }
        next()
    },
    /* 生成token*/ 
    makeToken(){ 
        let Token = null; 
        let payload = { 
                time:new Date().getTime(), 
                exp:this.makeExp(time) 
            } 
        Token = jwt.encode(payload,secret,'HS256') 
        return Token; 
    }, 
    /*生成token过期时间*/ 
    makeExp:function(time){
        // let stam = time*60*1000; 
        return time*60*1000; 
    } 
}