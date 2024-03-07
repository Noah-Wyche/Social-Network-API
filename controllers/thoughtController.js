const Thought = require('../models/Thought');

// Defing the ThoughtController
const ThoughtController = {
    // Function to see all of the thoughts
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Function to see specific thoughts by ID
    getThoughtById: async (req, res) => {
        const { thoughtId } = req.params;
        try {
          const thought = await Thought.findById(thoughtId);
          if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
          res.json(thought);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

      // Function to create a new thought
      createThought: async (req, res) => {
        const { thoughtBody, username } = req.body;
        try {
          const newThought = await Thought.create({ thoughtBody, username });
          res.status(201).json(newThought);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },

      // Function to update an existing Thought
      updateThought: async (req, res) => {
        const { thoughtId } = req.params;
        const { thoughtBody } = req.body;
        try {
          const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { thoughtBody },
            { new: true }
          );
          if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
          res.json(updatedThought);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },

      // Function to delete a thought
      deleteThought: async (req, res) => {
        const { thoughtId } = req.params;
        try {
          const deletedThought = await Thought.findByIdAndDelete(thoughtId);
          if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
          res.json({ message: 'Thought deleted successfully' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
};

module.exports = ThoughtController;