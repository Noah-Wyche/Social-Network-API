
const express = require('express');
const router = express.Router();
const FriendController = require('../controllers/friendController');

router.get('/', FriendController.getAllFriends);
router.get('/:FriendId', FriendController.getFriendById);
router.post('/', FriendController.createRFriend);
router.put('/:FriendId', FriendController.updateFriend);
router.delete('/:FriendId', FriendController.deleteFriend);

module.exports = router;