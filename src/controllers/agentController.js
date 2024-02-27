import Agent from '../models/Agent.js';

const getAgents = (req, res) => {
    Agent.findAll((err, agents) => {
        if (err) {
            console.error('Error fetching agents:', err);
            res.status(500).send({ message: 'Error fetching agents' });
            return;
        }
        res.json(agents);
    });
};

const getAgentById = (req, res) => {
    const { id } = req.params;
    Agent.findById(id, (err, agents) => {
        if (err) {
            console.error(`Error fetching agent with id ${id}:`, err);
            res.status(500).send({ message: `Error fetching agent with id ${id}` });
            return;
        }
        if (agents.length === 0) {
            res.status(404).send({ message: 'Agent not found' });
            return;
        }
        res.json(agents[0]);
    });
};

const createAgent = (req, res) => {
    const agentData = req.body;
    Agent.create(agentData, (err, result) => {
        if (err) {
            console.error('Error creating agent:', err);
            res.status(500).send({ message: 'Error creating agent' });
            return;
        }
        res.status(201).send({ message: 'Agent created', agentID: result.insertId }); // insertId is automatically given to us by db
    });
};

const agentController = {
    getAgents,
    getAgentById,
    createAgent
};

export default agentController;