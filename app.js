require("dotenv").config();
const express = require("express");
const app = express();
require('dotenv').config();

// Default options
app.use(express.static("public"));

// Run server
const server = app.listen(process.env.PORT || 8080, () => {
    console.log("Connected and listening on port " + server.address().port);
});


