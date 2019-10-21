const admin = 'admin';             // 数据库操作管理员
const pwd = '123456';                 // 对应管理员密码
const dbName = 'expressdb';                   // 数据库名称
const replName = 'SmartCF';                 // 副本集的名称
const replDBUrls = '119.23.251.155:20178,120.79.69.56:20178,120.79.69.56:20179';        // 所有副本集的服务器URL，不同服务器或端口用","分隔开

module.exports = {
    base: 'mongodb://localhost/' + dbName,
    aliDBUrl: 'mongodb://' + admin + ':' + pwd + '@' + replDBUrls + '/' + dbName + '?replicaSet=' + replName
};