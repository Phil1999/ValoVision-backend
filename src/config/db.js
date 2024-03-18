import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env.local'
});


const pool = mysql.createPool({
    connectionLimit     : 5,
    host                : process.env.DB_HOST,
    user                : process.env.DB_USER,
    password            : process.env.DB_PASSWORD,
    database            : process.env.DB_NAME,
    port                : process.env.DB_PORT,
    waitForConnections  : true,
    queueLimit          : 0
}).promise();

// Test database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to database');
        connection.release();
    }
});

export default pool;
