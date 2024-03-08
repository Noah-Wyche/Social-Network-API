// Importing required modules
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Setting the current working directory
const cwd = process.cwd();

// Defining the port to listen on
const PORT = process.env.PORT || 3001;

// Creating an Express application instance
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Establishing database connection
db.once("open", () => {
  // Starting the server to listen for requests
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
  });
});
