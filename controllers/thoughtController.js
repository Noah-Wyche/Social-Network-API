// Imports
const { User, Thought } = require("../models");

// Thought Controller Object
const thoughtController = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      return res.status(200).json(thoughts);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },

  // Get single thought
  async getThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      return res.status(200).json(thought);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },

  // Create thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      const user = await User.findByIdAndUpdate(
        req.body.userId,
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );

      return res.status(200).json({ thought, user });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },

  // Update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      return res.status(200).json(thought);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },

  // Delete thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      return res.status(200).json({
        message: "Thought & associated reactions successfully deleted",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },

  // Add reaction
  async addReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true }
      );

      if (!reaction) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      return res.status(200).json(reaction);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },

  // Delete reaction
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res
          .status(404)
          .json({ message: "Check thought and reaction ID" });
      }

      return res.status(200).json(reaction);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },
};

// Exports
module.exports = thoughtController;
