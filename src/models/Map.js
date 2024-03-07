import pool from '../config/db.js';

const Map = {
    findAll: async function() {
        try {
            const [result] = await pool.query('SELECT * FROM Maps');
            return result;
        } catch (error) {
            throw error;
        }
    },
    findById: async function(id) {
        try {
            const [result] = await pool.query(
                'SELECT * FROM Maps WHERE mapID =?', [id]);
                return result[0];
        } catch (error) {
            throw error;
        }
    },
    create: async function(mapData) {
        try {
            const [result] = await pool.query(
                'INSERT INTO Maps (mapName, mapImageLink) VALUES           (?, ?)',
                [mapData.mapName, mapData.mapImageLink]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },
    update: async function(id, mapData) {
        try {
            const [result] = await pool.query(
                'UPDATE Maps SET mapName = ?, mapImageLink = ? WHERE      mapID = ?',
                [mapData.mapName, mapData.mapImageLink, [id]]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },
    delete: async function(id) {
        try {
            const [result] = await pool.query(
                'DELETE FROM Maps WHERE mapID = ?', [id]);
                return result;
        } catch (error) {
            throw error;
        }
    }

};

export default Map;