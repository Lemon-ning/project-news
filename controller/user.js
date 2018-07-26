// 需要将 不同请求对应的处理函数导出
// 处理函数是 匿名函数 
exports.showSignin = (req, res) => {
    // 响应给客户端页面   res.render() 用的是 express-art-template 模板
    // res.render('想要响应的页面','数据源'); 如果暂时没有数据源，可以不写，只把响应的页面返回
    res.render('signin.html');
}