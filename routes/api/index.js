const express = require('express');
const router = express.Router();

// Import and use individual route files
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const friendRoutes = require('./friend-routes');
const reactionRoutes = require('./reaction-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/friends', friendRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;
