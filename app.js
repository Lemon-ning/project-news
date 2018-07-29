// app.js 是程序的入口文件
// 该文件中包含程序所需的基本文件和指向
// 1、导包    2、实例化所需对象，配置包   3、路由挂载(不同请求对应不同的callback)  4、绑定端口

// 导包
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
// 导入路由模块
const router = require('./router');
// 配置包
const app = express();

// 配置模板引擎
app.engine('html', require('express-art-template'));

// 统一处理静态资源: 将 public 文件夹下的静态资源开放   将 node_modules 文件夹下的第三方文件公开
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// 配置 express-session 包
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// 路由挂载
app.use(router);

// 绑定端口
app.listen(12345, () => {
    console.log('run......');
})