import Strategy from "../models/Strategy.js";

const getStrategies = async (req, res) => {
    try {
        const strategies = await Strategy.findAll();
        if (strategies.length == 0) {
            res.status(404).send({ message: 'No strategies added.' });
        } else {
            res.status(200).json(strategies);
        }
        
    } catch (error) {
        console.error('Error fetching strategies:', error);
        res.status(500).send({ message: 'Error fetching strategies' });
    }
};

const getStrategyById = async (req, res) => {
    const { id } = req.params;
    try {
        const strategy = await Strategy.findById(id);
        if (!strategy) {
            res.status(404).send({ message: 'Strategy not found' });
        } else {
            res.status(200).json(strategy);
        }
    } catch (error) {
        console.error(`Error fetching strategy with id ${id}:`, error);
        res.status(500).send({ message: `Error fetching strategy with id ${id}` });
    }
};

const createStrategy = async (req, res) => {
    const strategyData = req.body;
    try {
        const result = await Strategy.create(strategyData);
        res.status(201).send({ message: 'Strategy created', strategyID: result.insertId });
    } catch (error) {
        console.error('Error creating strategy:', error);
        res.status(500).send({ message: 'Error creating strategy' });
    }
};

const updateStrategy = async (req, res) => {
    const { id } = req.params;
    const strategyData = req.body;
    try {
        const result = await Strategy.update(id, strategyData);
        res.status(200).send({ message: 'Strategy successfully updated'})
    } catch (error) {
        console.error('Error updating strategy', error);
        res.status(500).send({ message: 'Error updating strategy'});
    }
};

const deleteStrategy = async(req, res) => {
    const { id } = req.params;
    try {
        const result = await Strategy.delete(id);
        res.status(200).send({message: 'Strategy successfully deleted'});
    } catch (error) {
        console.error('Error deleting strategy', error);
        res.status(500).send({ message: 'Error deleting strategy'});
    }
}

const strategyController = {
    getStrategies,
    getStrategyById,
    createStrategy,
    deleteStrategy,
    updateStrategy
};

export default strategyController;