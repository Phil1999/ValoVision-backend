import Agent from '../models/Agent.js';

const getAgents = async (req, res) => {
    try {
        const agents = await Agent.findAll();
        if (agents.length == 0) {
            res.status(404).send({ message: 'No agents added.' });
        } else {
            res.status(200).json(agents);
        }
        
    } catch (error) {
        console.error('Error fetching agents:', error);
        res.status(500).send({ message: 'Error fetching agents' });
    }
};

const getAgentById = async (req, res) => {
    const { id } = req.params;
    try {
        const agent = await Agent.findById(id);
        if (!agent) {
            res.status(404).send({ message: 'Agent not found' });
        } else {
            res.status(200).json(agent);
        }
    } catch (error) {
        console.error(`Error fetching agent with id ${id}:`, error);
        res.status(500).send({ message: `Error fetching agent with id ${id}` });
    }
};

const createAgent = async (req, res) => {
    const agentData = req.body;
    try {
        const result = await Agent.create(agentData);
        res.status(201).send({ message: 'Agent created', agentID: result.insertId });
    } catch (error) {
        console.error('Error creating agent:', error);
        res.status(500).send({ message: 'Error creating agent' });
    }
};

const updateAgent = async (req, res) => {
    const { id } = req.params;
    const agentData = req.body;
    try {
        const result = await Agent.update(id, agentData);
        res.status(200).send({ message: 'Agent successfully updated'})
    } catch (error) {
        console.error('Error updating agent', error);
        res.status(500).send({ message: 'Error updating agent'});
    }
};

const deleteAgent = async(req, res) => {
    const { id } = req.params;
    try {
        const result = await Agent.delete(id);
        res.status(200).send({message: 'Agent successfully deleted'});
    } catch (error) {
        console.error('Error deleting agent', error);
        res.status(500).send({ message: 'Error deleting agent'});
    }
}

const agentController = {
    getAgents,
    getAgentById,
    createAgent,
    deleteAgent,
    updateAgent
};

export default agentController;