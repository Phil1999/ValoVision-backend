import mysql from 'mysql2'


import dotenv from 'dotenv'
dotenv.config()

// Uses .env file for MySQL connection 
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getPlayers() {
    try {
        const [rows] = await pool.query("SELECT * FROM players");
        return rows;
    } catch (error) {
        console.error('Error fetching players:', error);
        throw error; // Rethrowing the error allows calling code to handle it further if needed.
    }
}

export async function getPlayer(playerID) {
    try {
        const [rows] = await pool.query(`
            SELECT *
            FROM players
            WHERE playerID = ?
        `, [playerID]);
        return rows[0];
    } catch (error) {
        console.error(`Error fetching player with ID ${playerID}:`, error);
        throw error;
    }
}

export async function createPlayer(playerID, playerName, playerTag) {
    try {
        await pool.query(`
            INSERT INTO Players (playerID, playerName, playerTag)
            VALUES (?, ?, ?) 
        `, [playerID, playerName, playerTag]);
        return getPlayer(playerID); // This fetches the newly created player
    } catch (error) {
        console.error('Error creating player:', error);
        throw error;
    }
}


//const result = await createPlayer('playerXX4', 'BuckyMaster', 'BM01')
//console.log(result)
    const player = await getPlayer('playerXX5')
    console.log(player)