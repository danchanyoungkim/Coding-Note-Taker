const express = require('express');
const path = require('path');
// const fs = require('fs');

const apiRouter = require('./routes/api');
const 

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded data.
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(express.static('public'));

// Routes

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});