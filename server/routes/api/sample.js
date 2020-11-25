const express = require('express');
const mysql = require('mysql');


const router = express.Router();


//Get
router.get('/', (req, res)=>{
    res.send('Hello');
})

router.get('/library', (req, res)=>{
    res.render('Library');
})

router.get('/services', (req, res)=>{
    res.render('Services');
})

//Delete



//Update


//Add



module.exports = router;