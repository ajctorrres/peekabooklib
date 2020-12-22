const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const urlEncodedParser = bodyParser.urlencoded({extended:false});
const cors = require('cors');
const db = require('./config/database');

//Test db connection
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));
const app = express();



app.use(cors());

const sample = require('./routes/api/sample');
app.use('/api/sample', sample);

// const port = process.env.PORT || 3000;
// app.listen(port, ()=>console.log("Server started"));

app.listen(3000);