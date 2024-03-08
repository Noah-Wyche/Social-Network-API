// Importing required modules
const router = require("express").Router();

// Importing controller functions from userController.js
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// Defining routes for handling users
// Route -> http://localhost:3001/api/users
router.route("/")
  .get(getUsers) // GET endpoint to retrieve all users
  .post(createUser); // POST endpoint to create a new user

// Route -> http://localhost:3001/api/users/:userId
router.route("/:userId")
  .get(getUser) // GET endpoint to retrieve a single user by ID
  .put(updateUser) // PUT endpoint to update an existing user
  .delete(deleteUser); // DELETE endpoint to delete a user

// Route -> http://localhost:3001/api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId")
  .post(addFriend) // POST endpoint to add a friend to a user
  .delete(deleteFriend); // DELETE endpoint to delete a friend from a user

// Exporting the router
module.exports = router;
