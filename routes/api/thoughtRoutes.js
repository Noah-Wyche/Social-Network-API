// Importing required modules
const router = require("express").Router();

// Importing controller functions from thoughtController.js
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Defining routes for handling thoughts
// Route -> http://localhost:3001/api/thoughts
router.route("/")
  .get(getThoughts) // GET endpoint to retrieve all thoughts
  .post(createThought); // POST endpoint to create a new thought

// Route -> http://localhost:3001/api/thoughts/:thoughtId
router.route("/:thoughtId")
  .get(getThought) // GET endpoint to retrieve a single thought by ID
  .put(updateThought) // PUT endpoint to update an existing thought
  .delete(deleteThought); // DELETE endpoint to delete a thought

// Route -> http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions")
  .post(addReaction); // POST endpoint to add a reaction to a thought

// Route -> http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction); // DELETE endpoint to delete a reaction from a thought

// Exporting the router
module.exports = router;
