import pool from '../config/db.js';

const Strategy = {
    findAll: async function() {
        try {
            const [result] = await pool.query('SELECT Strategies.* FROM Maps JOIN Strategies ON Strategies.mapID = Maps.mapID');
            return result;
        } catch (error) {
            throw error;
        }
    },
    findById: async function(id) {
        try {
            const [result] = await pool.query(
                'SELECT * FROM Strategies WHERE strategyID = ?', [id]);
                return result[0];
        } catch (error) {
            throw error;
        }
    },
    create: async function(strategyData) {
        try {
            const [result] = await pool.query(
                'INSERT INTO Strategies (strategyTitle, strategyDescription, strategyImageLink, mapID) VALUES (?, ?, ?, ?)',
                [strategyData.strategyTitle, strategyData.strategyDescription, strategyData.strategyImageLink, strategyData.mapID]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },
    update: async function(id, strategyData) {
        try {
            const [result] = await pool.query(
                'UPDATE Strategies strategyTitle = ?, strategyDescription = ?,strategyImageLink = ?, mapID = ? WHERE strategyID = ?',
                [strategyData.strategyTitle, strategyData.strategyDescription, strategyData.strategyImageLink, strategyData.mapID, [id]]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },
    delete: async function(id) {
        try {
            const [result] = await pool.query(
                'DELETE FROM Strategies WHERE strategyID = ?', [id]);
                return result;
        } catch (error) {
            throw error;
        }
    }

};

export default Strategy;