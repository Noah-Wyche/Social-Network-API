const Reaction = require('../models/Reaction');

// Defining the ReactionController
const ReactionController = {
  // Function to see all reactions
  getAllReactions: async (req, res) => {
    try {
      const reactions = await Reaction.find();
      res.json(reactions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Function to see specific reactions by ID
  getReactionById: async (req, res) => {
    const { reactionId } = req.params;
    try {
      const reaction = await Reaction.findById(reactionId);
      if (!reaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }
      res.json(reaction);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Function to create a new reaction
  createReaction: async (req, res) => {
    const { reactionBody, username } = req.body;
    try {
      const newReaction = await Reaction.create({ reactionBody, username });
      res.status(201).json(newReaction);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Function to update an existing reaction
  updateReaction: async (req, res) => {
    const { reactionId } = req.params;
    const { reactionBody } = req.body;
    try {
      const updatedReaction = await Reaction.findByIdAndUpdate(
        reactionId,
        { reactionBody },
        { new: true }
      );
      if (!updatedReaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }
      res.json(updatedReaction);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Function to delete a reaction
  deleteReaction: async (req, res) => {
    const { reactionId } = req.params;
    try {
      const deletedReaction = await Reaction.findByIdAndDelete(reactionId);
      if (!deletedReaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }
      res.json({ message: 'Reaction deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = ReactionController;