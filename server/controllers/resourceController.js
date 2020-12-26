const express = require('express');
const router = express.Router();
const db = require('../database');
const Resource = require('../models/Resource');
// router.get('/', (req,res)=> res.send('Working'));
router.get('/', (req,res) => 
    Resource.findAll()
        .then(resourceController => {
            console.log(resourceController);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);

module.exports = router;