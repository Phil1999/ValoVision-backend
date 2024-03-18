    import pool from '../config/db.js';

    const Utility = {
        findAll: async function() {
            try {
                const [result] = await pool.query('SELECT * FROM Utilities');
                return result;
            } catch (error) {
                throw error;
            }
        },
        findById: async function(id) {
            try {
                const [result] = await pool.query(
                    'SELECT * FROM Utilities WHERE utilityID =?', [id]);
                    return result[0];
            } catch (error) {
                throw error;
            }
        },
        create: async function(utilityData) {
            try {
                const [result] = await pool.query(
                    'INSERT INTO Utilities (utilityName, utilityIconLink) VALUES (?, ?)',
                    [utilityData.utilityName, utilityData.utilityIconLink]
                );
                return result;
            } catch (error) {
                throw error;
            }
        },
        update: async function(id, utilityData) {
            try {
                const [result] = await pool.query(
                    'UPDATE Utilities SET utilityName = ?, utilityIconLink = ? WHERE utilityID = ?',
                    [utilityData.utilityName, utilityData.utilityIconLink, [id]]
                );
                return result;
            } catch (error) {
                throw error;
            }
        },
        delete: async function(id) {
            try {
                const [result] = await pool.query(
                    'DELETE FROM Utilities WHERE utilityID = ?', [id]);
                    return result;
            } catch (error) {
                throw error;
            }
        }

    };

    export default Utility;