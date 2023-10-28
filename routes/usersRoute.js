const express = require("express");
const router = express.Router();
const MongoDB = require("../lib/mongo");
const mongo = new MongoDB();


router.get("/", async(req, res, next) =>{
    const data = await mongo.getAll("users");
    const results = []; 
    for await(const doc of data){
        results.push(doc)
    }
    res.status(200).json({
        results  
    })
});

module.exports = router;