const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5002;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/comment", (req, res) => {
    const data = {...req.body};
    koneksi.query('INSERT INTO comments SET ?', data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(result);
        }
    }
    );
});

app.get("/api/comment", (req, res) => {
    koneksi.query('SELECT * FROM comments', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

app.get("/api/comment/:id", (req, res) => {
    koneksi.query('SELECT * FROM comments WHERE id = ?', [req.params.id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));