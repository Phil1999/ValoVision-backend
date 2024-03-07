import Utility from '../models/Utility.js';

const getUtilities = async (req, res) => {
    try {
        const utilities = await Utility.findAll();
        if (utilities.length == 0) {
            res.status(404).send({ message: 'No utilities added.' });
        } else {
            res.status(200).json(utilities);
        }
        
    } catch (error) {
        console.error('Error fetching utilities:', error);
        res.status(500).send({ message: 'Error fetching utilities' });
    }
};

const getUtilityById = async (req, res) => {
    const { id } = req.params;
    try {
        const utility = await Utility.findById(id);
        if (!utility) {
            res.status(404).send({ message: 'Utility not found' });
        } else {
            res.status(200).json(utility);
        }
    } catch (error) {
        console.error(`Error fetching utility with id ${id}:`, error);
        res.status(500).send({ message: `Error fetching utility with id ${id}` });
    }
};

const createUtility = async (req, res) => {
    const utilityData = req.body;
    try {
        const result = await Utility.create(utilityData);
        res.status(201).send({ message: 'Utility created', utilityID: result.insertId });
    } catch (error) {
        console.error('Error creating utility:', error);
        res.status(500).send({ message: 'Error creating utility' });
    }
};

const updateUtility = async (req, res) => {
    const { id } = req.params;
    const utilityData = req.body;
    try {
        const result = await Utility.update(id, utilityData);
        res.status(200).send({ message: 'Utility successfully updated'})
    } catch (error) {
        console.error('Error updating utility', error);
        res.status(500).send({ message: 'Error updating utility'});
    }
};

const deleteUtility = async(req, res) => {
    const { id } = req.params;
    try {
        const result = await Utility.delete(id);
        res.status(200).send({message: 'Utility successfully deleted'});
    } catch (error) {
        console.error('Error deleting utility', error);
        res.status(500).send({ message: 'Error deleting utility'});
    }
}

const utilityController = {
    getUtilities,
    getUtilityById,
    createUtility,
    deleteUtility,
    updateUtility
};

export default utilityController;