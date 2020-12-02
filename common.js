function operateDB(sql, params) {
    return new Promise((resolve, reject) => {
        // 引入模块
        var mysql = require('mysql');

        // 准备连接数据库相关参数
        var cn = mysql.createConnection({
            // IP地址
            host: 'localhost',
            // 端口
            port: 3306,
            // 数据库名称
            database: 'myuser',
            // 登录名
            user: 'root',
            // 密码
            password: '123456'
        });

        // 连接数据库
        cn.connect();

        // 执行数据库操作
        cn.query(sql, params, function (err, result) {
            if (err) {
                return reject("查询数据失败")
            }
            resolve(result);
        });

        // 关闭数据库连接
        cn.end();
    })
}

module.exports = {
    operateDB: operateDB
}
