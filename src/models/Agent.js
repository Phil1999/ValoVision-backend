import pool from '../config/db.js';

const Agent = {
    findAll: async function() {
        try {
            const [result] = await pool.query('SELECT * FROM Agents');
            return result;
        } catch (error) {
            throw error;
        }
    },
    findById: async function(id) {
        try {
            const [result] = await pool.query('SELECT * FROM Agents WHERE agentID = ?', [id]);
            return result[0];
        } catch (error) {
            throw error;
        }
    },
    create: async function(agentData) {
        try {
            const [result] = await pool.query(
                'INSERT INTO Agents (agentName, agentPortraitLink) VALUES (?, ?)',
                [agentData.agentName, agentData.agentPortraitLink]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },
    update: async function(id, agentData) {
        try {
            const [result] = await pool.query(
                'UPDATE Agents SET agentName = ?, agentPortraitLink = ? WHERE agentID = ?',
                [agentData.agentName, agentData.agentPortraitLink, [id]]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },
    delete: async function(id) {
        try {
           const [result] = await pool.query(
                'DELETE FROM Agents WHERE agentID = ?', [id]);
           return result;
        } catch (error) {
            throw error;
        }
    }

};

export default Agent;

