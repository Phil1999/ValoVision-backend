import Agent from '../models/Agent.js';

const getAgents = async (req, res) => {
    try {
        const agents = await Agent.findAll();
        if (!agents) {
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

const agentController = {
    getAgents,
    getAgentById,
    createAgent
};

export default agentController;