const express = require('express');
const router = express.Router();

// Import the FriendController
const FriendController = require('../../controllers/friendController.js');

// Define routes
router.get('/', FriendController.getAllFriends);
router.get('/:friendId', FriendController.getFriendById);
router.post('/', FriendController.createFriend);
router.delete('/:friendId', FriendController.deleteFriend);

module.exports = router;
