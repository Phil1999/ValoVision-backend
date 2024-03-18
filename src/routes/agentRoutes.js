import express from 'express';
import agentController from '../controllers/agentController.js';

const router = express.Router();

router.get('/', agentController.getAgents); // Get all agents
router.get('/:id', agentController.getAgentById); // Get by ID
router.post('/', agentController.createAgent); // Create a new agent
router.put('/:id', agentController.updateAgent); // Update agent
router.delete('/:id', agentController.deleteAgent); // Delete agent with the ID

export default router;