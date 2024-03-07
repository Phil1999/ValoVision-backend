import express from 'express';
import utilityController from '../controllers/utilityController.js';

const router = express.Router();

router.get('/', utilityController.getUtilities); // Get all utilities
router.get('/:id', utilityController.getUtilityById); // Get utility by ID
router.post('/', utilityController.createUtility); // Create a new utility
router.put('/:id', utilityController.updateUtility); // Update utility
router.delete('/:id', utilityController.deleteUtility); // Delete utility with

export default router;