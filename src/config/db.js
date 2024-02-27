const mysql = require('mysql');

// Attempt to reconnect to the database
function handleDisconnect() {
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    db.connect(err => {
        if (err) {
            console.error('Error trying to connect to db:', err);
            setTimeout(handleDisconnect, 5000); // Try to reconnect every 5 seconds
        } else {
            console.log("Successfully connected to MySQL Database");
        }
    });

    db.on('error', function(err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
            handleDisconnect();                         
        } else {                                      
            throw err; 
        }
    });

    return db;
}

const db = handleDisconnect();

module.exports = db;