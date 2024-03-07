import Comment from '../models/Comment.js';

const getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        if (comments.length == 0) {
            res.status(404).send({ message: 'No comments added.' });
        } else {
            res.status(200).json(comments);
        }
        
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).send({ message: 'Error fetching comments' });
    }
};

const getCommentById = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id);
        if (!comment) {
            res.status(404).send({ message: 'Comment not found' });
        } else {
            res.status(200).json(comment);
        }
    } catch (error) {
        console.error(`Error fetching comment with id ${id}:`, error);
        res.status(500).send({ message: `Error fetching comment with id ${id}` });
    }
};

const createComment = async (req, res) => {
    const commentData = req.body;
    try {
        const result = await Comment.create(commentData);
        res.status(201).send({ message: 'Comment created', commentID: result.insertId });
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).send({ message: 'Error creating comment' });
    }
};

const updateComment = async (req, res) => {
    const { id } = req.params;
    const commentData = req.body;
    try {
        const result = await Comment.update(id, commentData);
        res.status(200).send({ message: 'Comment successfully updated'})
    } catch (error) {
        console.error('Error updating comment', error);
        res.status(500).send({ message: 'Error updating comment'});
    }
};

const deleteComment = async(req, res) => {
    const { id } = req.params;
    try {
        const result = await Comment.delete(id);
        res.status(200).send({message: 'Comment successfully deleted'});
    } catch (error) {
        console.error('Error deleting comment', error);
        res.status(500).send({ message: 'Error deleting comment'});
    }
}

const commentController = {
    getComments,
    getCommentById,
    createComment,
    deleteComment,
    updateComment
};

export default commentController;