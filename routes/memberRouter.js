const express = require('express');
const router = express.Router();
const member=require('../models').member;

router.post('/selectAll', (req, res)=>{
    //db select ... 
    member.findAll({}) // select * from member;
    .then((members)=>{
        console.log(members);
        res.json({message: members});
    })
    .catch((err)=>{
        console.log(err);
        res.json({message: "db select arr ..."});
    });
});

module.exports = router;