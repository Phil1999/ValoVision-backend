import pool from '../config/db.js';

const Agent = {
    findAll: function(callback) {
        pool.query('SELECT * FROM Agents', callback);
    },
    findById: function(id, callback) {
        pool.query('SELECT * FROM Agents WHERE agentID = ?', [id], callback);
    },
    create: function(agentData, callback) {
        pool.query(
            'INSERT INTO Agents (agentName, agentPortraitLink) VALUES (?, ?)',
            [agentData.agentName, agentData.agentPortraitLink], callback
        );
        
    }
};

export default Agent;