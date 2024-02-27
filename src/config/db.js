const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit     : 5,
    host                : process.env.DB_HOST,
    user                : process.env.DB_USER,
    password            : process.env.DB_PASSWORD,
    database            : process.env.DB_NAME,
    waitForConnections : true,
    queueLimit : 0
});

module.exports = pool;