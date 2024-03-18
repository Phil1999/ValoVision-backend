import express from 'express';
import strategyController from '../controllers/strategyController.js';

const router = express.Router();

router.get('/', strategyController.getStrategies); // Get all strategies
router.get('/:id', strategyController.getStrategyById); // Get strategy by ID
router.post('/', strategyController.createStrategy); // Create a new strategy
router.put('/:id', strategyController.updateStrategy); // Update strategy
router.delete('/:id', strategyController.deleteStrategy); // Delete strategy with the ID

export default router;