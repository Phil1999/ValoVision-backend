const db = require('../config/db');

const Agent = {
    findAll: function(callback) {
        db.query('SELECT * FROM Agents', callback);
    },
    findById: function(id, callback) {
        db.query('SELECT * FROM Agents WHERE agentID = ?', [id], callback);
    },
    create: function(agentData, callback) {
        db.query(
            'INSERT INTO Agents (agentName, agentPortraitLink) VALUES (?, ?)',
            [agentData.agentName, agentData.agentPortraitLink], callback
        );
        
    }
};

module.exports = Agent;