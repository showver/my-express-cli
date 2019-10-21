var Sequelize =  require('sequelize');
var sequelize =  require('../config/db');

/* 数据库模型名称配置及路径 */
const models=[
    {
        "name": "User",
        "path": "./tb_user.js"
    },
    {
        "name": "Info",
        "path": "./tb_info.js"
    },
 
]

/* 数据库模型输出 */
models.forEach(item=>{
    module.exports[item.name]=require(item.path)(sequelize,Sequelize);
})