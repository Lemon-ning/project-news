// 连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'project'
  });
  
  connection.connect();
  
//   connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
//  数据库操作是异步操作，如果关闭数据库连接，有可能上述数据库语句还没有执行完，就会得不到结果
//  所以不需要关闭数据库连接 
//  connection.end();

// 导出数据库连接对象
module.exports = connection;