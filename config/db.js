
var Sequelize =  require('sequelize');
// database数据库名称   name 用户  password密码
var sequelize = new Sequelize('expressdb', 'root', 'root', {
    host: 'localhost',  //数据库域名
    dialect: 'mysql',
    port: '3306',  //数据库端口
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports=sequelize