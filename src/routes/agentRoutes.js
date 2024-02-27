import express from 'express';
import agentController from '../controllers/agentController.js';

const router = express.Router();

router.get('/', agentController.getAgents); // Get all agents
router.get('/:id', agentController.getAgentById); // Get by ID
router.post('/', agentController.createAgent); // Create a new agent

export default router;