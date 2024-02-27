const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');

router.get('/', agentController.getAgents); // Get all agents
router.get('/:id', agentController.getAgentById); // Get by ID
router.post('/', agentController.createAgent); // Create a new agent


module.exports = router;