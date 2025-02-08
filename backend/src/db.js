/*
 * @Author: 赵恩来
 * @Date: 2025-02-08 10:24:50
 * @LastEditors: 赵恩来
 * @LastEditTime: 2025-02-08 10:36:28
 * @Description:
 */
const mysql = require("mysql2");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "Zel123",
	database: "test",
});

module.exports = pool.promise();
