const app = require('express').Router();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes.`);
    res.json(data);
});

app.get('/api/notes/:d', (req, res) => {
    console.info(`${req.method} request received for notes.`);
    res.json(data[Number(req.params.id)]);
});

// Post.
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to submit feedback`);
    res.json(data);
    data.push(req.body);

    fs.writeFileSync('./db/db.json', JSON.stringify(data), (err) => {
        if (err)
        return (err);
    });
});

module.exports = app;