const api = require('express').Router();
const data = require('../db/db.json');

api.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes.`);
    res.json(data);
});

// Post.
api.post('/notes', (req, res) => {
    console.info(`${req.method} request received to submit feedback`);
    res.json(note);
    data.push(req.body);
});

module.exports = api;