const express = require('express');
const app = express();
const mongodb = require('mongodb');

const config = require('./db');
const PORT = 4000;
const client = mongodb.MongoClient;

client.connect(config.DB, function(err, db) {
    if (err) {
        console.log('database is not connected')
    } else {
        console.log('connected!!')
    }
});

app.get('/', function(req, res) {
    res.json({ "hello": "test test" });
});

var num = 10
app.get('/test', (req, res) => {
    res.json({ "num": num += 1 });
});

app.listen(PORT, function() {
    console.log('Your node js server is running on PORT:', PORT);
});