const app = require('express').Router();
const fs = require('fs');

app.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes.`);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err)
        return err;
        res.json(JSON.parse(data));
    })
});

// Post.
app.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        console.info(`${req.method} request received to submit notes`);
        if (err)
        return err;

        let parsedData = JSON.parse(data);
        parsedData.push(req.body);

        let idNumber = 1;
        parsedData.forEach((note, index) => {
            note.id = idNumber;
            idNumber++;
            return parsedData;
        })
        
        fs.writeFile('./db/db.json', JSON.stringify(parsedData), (err) => {
            if (err) 
            return err;
            console.info("Note posted");
        });
    });
    res.end();
});

module.exports = app;