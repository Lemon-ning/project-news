// 专门实现用户相关功能的控制器---逻辑功能   对应的数据处理是在 m_user.js 数据模型中

// 需要将 不同请求对应的处理函数导出
// 处理函数是 匿名函数 

// 导入对应的数据模型 m_user.js
const M_user = require('../models/m_user');

// 用户地址栏输入 http://localhost:12345/signin 时，向服务端发送请求，响应渲染登录页面
exports.showSignin = (req, res) => {
    // 响应给客户端页面   res.render() 用的是 express-art-template 模板
    // res.render('想要响应的页面','数据源'); 如果暂时没有数据源，可以不写，只把响应的页面返回
    res.render('signin.html');
}


// 点击登录按钮，获取表单信息，处理登录的表单请求
exports.handleSignin = (req, res) => {
    const body = req.body;
    // console.log(req.body);
    // 获取到表单中的数据，去数据库中进行数据校验
    M_user.checkEmail(body.email,(error,results)=>{
        // 需要将 在数据库中查询的结果 返回给客户端    所以用 return
        // 返回一个状态码，便于客户端接收响应结果进行相应的处理
        if(error) {
            // throw error;
            return res.send({
                code: 500,
                message: error.message
            });
        }
        // 执行查询到的结果 先查询邮箱是否存在，在查询存在的邮箱所对应的密码是否正确
        // 如果查询的结果为 空 [] ，则证明没有此邮箱即用户
        if(!results[0]){
            return res.send({
                code: 1,
                message: '邮箱不存在，请查验后输入！！！'
            })
        }
        // 说明邮箱存在，查询邮箱所对应的密码和用户输入的密码是否一致
        // console.log(body.password); // 用户输入的密码，获取表单元素得到
        // console.log(results[0].password); // 数据库中的密码，查询的结果是数组，数组中是对象
        if(body.password !== results[0].password){
            return res.send({
                code: 2,
                message: '密码错误，请重新输入！！！'
            })
        }
        // 如果密码正确，则跳转到列表页
        // 如果密码成功，将信息保存在服务端的session中，需要先导入 express-session 
        // 导入后,可以使用 req.session 它是一个对象
        // 应该在这个位置保存到session中，因为代码执行到此处，说明用户名、密码正确
        // 保存到session后，可以将登录成功的状态码响应给客户端
        req.session.user = results[0];
        // console.log(req.session.user)
        res.send({
            code: 200,
            message: '登录成功，跳转到列表页'
        })
    })
}