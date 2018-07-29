// 该数据模型是专门处理用户模块控制器

// 导入数据库连接对象
const connection = require('../tools/db_config');

// 点击登录按钮，获取表单信息，处理登录的表单请求，需要在数据库中进行用户邮箱、密码校验
// 在一个函数外部使用函数内部异步操作(数据库查询)的结果，用回调函数 callback() 将结果作为参数返回
function checkEmail(email, callback){
    const sqlstr = 'SELECT * FROM `users` WHERE `email` = ?';
    connection.query(sqlstr, email, (error, results) => {
        if(error){
            callback(error);
        }
        // 此处只是将结果作为参数，调用用户传入的函数
        // 将第一个参数设为 null，是为了和形参 error 对应
        callback(null, results);
    })
}


// 需要将数据处理函数导出
exports.checkEmail = checkEmail;