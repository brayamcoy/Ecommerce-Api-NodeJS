const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const { initializeDatabase } = require('./database');
const app = express();
require('dotenv').config();

app.listen(process.env.PORT || 8000, () => {
    console.log("Server on port", process.env.PORT);
})

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
routes(app);


// Database
initializeDatabase();