const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//bodyParser middleware

app.use(bodyParser.json());

// DB Config

const db = require('./config/keys').mongoURI;

//Connect to Mongo

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));

//Use routes

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));