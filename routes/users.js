var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

/* 获取单个用户. */
router.get('/', (req, res) => userController.getUser(req, res));

/* 获取用户个数 */
router.get('/page', (req, res) => userController.getUserPage(req, res));

/* 新增用户 */
router.post('/new', (req, res) => userController.postUser(req, res));

module.exports = router;
