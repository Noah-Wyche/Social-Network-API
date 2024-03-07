const User = require('../models/User');

const FriendController = {
  getAllFriends: async (req, res) => {
    try {
      // Logic to retrieve all friends for a user
      const { userId } = req.params;
      const user = await User.findById(userId).populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user.friends);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addFriend: async (req, res) => {
    try {
      // Logic to add a friend to a user's friend list
      const { userId } = req.params;
      const { friendId } = req.body;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (user.friends.includes(friendId)) {
        return res.status(400).json({ message: 'Friend already added' });
      }
      user.friends.push(friendId);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  removeFriend: async (req, res) => {
    try {
      // Logic to remove a friend from a user's friend list
      const { userId, friendId } = req.params;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (!user.friends.includes(friendId)) {
        return res.status(400).json({ message: 'Friend not found in user\'s friend list' });
      }
      user.friends = user.friends.filter(friend => friend.toString() !== friendId);
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = FriendController;