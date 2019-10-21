var {User} = require('../models/index');
const resModel = require('../config/HttpRespose');

module.exports = {

   // 获取特定用户数据
   getUser: function(req, res) {
      User.findAll({attributes:['id','username']})
         .then(function(result) {
            res.send(resModel.SUCCESSFUL('获取成功!', result)).end();
         })
         .catch(function (error) {
            res.send(resModel.FAILED('请求失败!', error)).end();
         })
   },

   // 分页查询
   getUserPage: function(req, res) {
      var param = {
         'offset': Number(req.query.offset),   // 从第几个开始查询  Number(pageSize*pageNow)
         'limit': Number(req.query.limit),   //每次查询多少个 size
      }
      User.findAndCountAll(param)
         .then(function (result) {
            res.send(resModel.SUCCESSFUL('获取成功!', result)).end();
         })
         .catch(function (error) {
            res.send(resModel.FAILED('请求失败!', error)).end();
         })
   },

   // 新增用户
   postUser: function(req, res) {
      const user = req.body;
      User.create(user)
         .then(function (result) {
            res.send(resModel.SUCCESSFUL('新增成功!', result)).end();
         })
         .catch(function (error) {
            res.send(resModel.FAILED('请求失败!', error)).end();
         })
   },

   // 删除用户
   deleteUser: function(req, res) {
      let id = Number(req.query.id);
      User.destroy({where:{id:id}})
         .then(function (result) {
            res.send(resModel.SUCCESSFUL('删除成功!', result)).end();
         })
         .catch(function (error) {
            res.send(resModel.FAILED('请求失败!', error)).end();
         })
   },
   
   // 修改用户
   updateUser: function(req, res) {
      let id = Number(req.query.id);
      let username = req.query.username;
      User.update({username:username},{where:{id:id}})
         .then(function (result) {
            res.send(resModel.SUCCESSFUL('修改成功!', result)).end();
         })
         .catch(function (error) {
            res.send(resModel.FAILED('用户不存在!', error)).end();
         })
   },

}
