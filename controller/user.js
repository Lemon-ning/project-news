// 导包
var express = require('express');

// 配置包
var app = express();

// 配置模板引擎
app.engine('html', require('express-art-template'));

// 统一处理静态资源
app.use('./public', express.static('./public'));
app.use('./node_modules', express.static('./node_modules'));

// 路由挂载
// 当客户端发起 /signin 请求的时候，表示请示登录页面
app.get('/signin',(req, res) => {
    // 响应给客户端页面
    res.render('signin.html');
})

// 绑定端口
app.listen(12345, () => {
    console.log('run......');
})