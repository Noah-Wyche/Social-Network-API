// Imports
const mongoose = require("mongoose");

// Creates database
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Social-Network-API";

// Connects Mongoose and MongoDB
mongoose.connect(connectionString);

// Exports
module.exports = mongoose.connection;
