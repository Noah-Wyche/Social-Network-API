
const express = require('express');
const router = express.Router();
const ReactionController = require('../controllers/reactionController');

router.get('/', ReactionController.getAllReactions);
router.get('/:ReactionId', ReactionController.getReactionById);
router.post('/', ReactionController.createReaction);
router.put('/:ReactionId', ReactionController.updateReaction);
router.delete('/:ReactionId', ReactionController.deleteReaction);

module.exports = router;
