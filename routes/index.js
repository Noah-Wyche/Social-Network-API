const express = require('express');
const router = express.Router();

// Import and use the API routes
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
