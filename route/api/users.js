const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../users");

//get all the users
router.get("/", (req ,res) =>{
 const found = users.some(user => user.id === parseInt(req.params.id))

 if(found){
     res.json(users.filter(users.id === parseInt(req.params.id)))
 }else {
             res.sendStatus(400)
         }
     
 
}); 

module.export = router;