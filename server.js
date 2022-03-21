const express = require("express");

const htmlRouter = require("./routes/html");
const apiRouter = require("./routes/api");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.use((req, res, next) => {
    res.status(404).send('File Not Found')
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});