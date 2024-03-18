import express from 'express';
import mapController from '../controllers/mapController.js';

const router = express.Router();

router.get('/', mapController.getMaps); // Get all maps
router.get('/:id', mapController.getMapById); // Get map by ID
router.post('/', mapController.createMap); // Create a new map
router.put('/:id', mapController.updateMap); // Update map
router.delete('/:id', mapController.deleteMap); // Delete map with the ID

export default router;