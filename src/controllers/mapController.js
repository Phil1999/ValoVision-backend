import Map from '../models/Map.js';

const getMaps = async (req, res) => {
    try {
        const maps = await Map.findAll();
        if (maps.length == 0) {
            res.status(404).send({ message: 'No maps added.' });
        } else {
            res.status(200).json(maps);
        }
        
    } catch (error) {
        console.error('Error fetching maps:', error);
        res.status(500).send({ message: 'Error fetching maps' });
    }
};

const getMapById = async (req, res) => {
    const { id } = req.params;
    try {
        const map = await Map.findById(id);
        if (!map) {
            res.status(404).send({ message: 'Map not found' });
        } else {
            res.status(200).json(map);
        }
    } catch (error) {
        console.error(`Error fetching map with id ${id}:`, error);
        res.status(500).send({ message: `Error fetching map with id ${id}` });
    }
};

const createMap = async (req, res) => {
    const mapData = req.body;
    try {
        const result = await Map.create(mapData);
        res.status(201).send({ message: 'Map created', mapID: result.insertId });
    } catch (error) {
        console.error('Error creating map:', error);
        res.status(500).send({ message: 'Error creating map' });
    }
};

const updateMap = async (req, res) => {
    const { id } = req.params;
    const mapData = req.body;
    try {
        const result = await Map.update(id, mapData);
        res.status(200).send({ message: 'Map successfully updated'})
    } catch (error) {
        console.error('Error updating map', error);
        res.status(500).send({ message: 'Error updating map'});
    }
};

const deleteMap = async(req, res) => {
    const { id } = req.params;
    try {
        const result = await Map.delete(id);
        res.status(200).send({message: 'Map successfully deleted'});
    } catch (error) {
        console.error('Error deleting map', error);
        res.status(500).send({ message: 'Error deleting map'});
    }
}

const mapController = {
    getMaps,
    getMapById,
    createMap,
    deleteMap,
    updateMap
};

export default mapController;