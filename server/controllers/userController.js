const express = require('express');
const router = express.Router();
const db = require('../database');
const User = require('../models/User');
// router.get('/', (req,res)=> res.send('Working'));
router.get('/', (req,res) => 
    User.findAll()
        .then(userController => {
            console.log(userController);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);

module.exports = router;