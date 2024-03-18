import express from 'express';
import commentController from '../controllers/commentController.js';

const router = express.Router();

router.get('/', commentController.getComments); // Get all comments
router.get('/:id', commentController.getCommentById); // Get comment by ID
router.post('/', commentController.createComment); // Create a new comment
router.put('/:id', commentController.updateComment); // Update comment
router.delete('/:id', commentController.deleteComment); // Delete comment by ID

export default router;
