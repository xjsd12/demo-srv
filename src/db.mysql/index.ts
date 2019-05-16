//dba 123456
const mysql = require('mysql2/promise');

/**
 * 本地mysql 新建数据库 db_demo (utf-8编码) 新建用户 dba （给足权限）
 */
let cfg = {
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'dba',
    password : '123456',
    database : 'db_demo',
    multipleStatements:true //允许一次执行多条 sql语句
}