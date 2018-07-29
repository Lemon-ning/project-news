// 具体的路由指向
// 步骤：
// 1、导入所需要的包---express             2、调用express.Router()实例化router对象
// 3、为 router 对象添加对应的处理函数      4、导出路由对象

// 导包
const express = require('express');
const user = require('./controller/c_user');
// 实例化对象
const router = express.Router();

// 为实例化对象 router 添加对应的处理函数
// 当客户端发起 /signin 请求的时候，表示请示登录页面，将登陆页面响应给客户端
router.get('/signin', user.showSignin)
    //  当点击登录按钮的时候，获取表单信息，处理登录表单的请求
      .post('/handleSignin', user.handleSignin);


// 导出路由对象
module.exports = router;