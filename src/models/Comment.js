import pool from '../config/db.js';

const Comment = {
    findAll: async function() {
        try {
            const [result] = await pool.query('SELECT * FROM Comments');
            return result;
        } catch (error) {
            throw error;
        }
    },
    findById: async function(id) {
        try {
            const [result] = await pool.query(
                'SELECT * FROM Comments WHERE commentID = ?', [id]);
                return result[0];
        } catch (error) {
            throw error;
        }
    },
    create: async function(commentData) {
        try {
            const [result] = await pool.query(
                'INSERT INTO Comments (commentText) VALUES (?)',
                [commentData.commentText]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },
    update: async function(id, commentData) {
        try {
            const [result] = await pool.query(
                'UPDATE Comments SET commentText = ? WHERE commentID = ?',
                [commentData.commentText, [id]]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },
    delete: async function(id) {
        try {
            const [result] = await pool.query(
                'DELETE FROM Comments WHERE commentID = ?', [id]);
                return result;
        } catch (error) {
            throw error;
        }
    }

};

export default Comment;