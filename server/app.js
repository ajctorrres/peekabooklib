const express = require('express');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false});
const cors = require('cors');
const dbconnect = require('./database');


//Test db connection
dbconnect.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Errors: ' + err));

const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('INDEX'));
app.use('/resource', require('./controllers/resourceController'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started ${PORT}`));

// app.listen(3000);
