//middleware function
const express = require("express");
const app = express(); 

const mylogger = function(req, res, next){
    console.log("LOGGED");
    next();
}

app.use(mylogger)

app.get('/',function(req,res){
    res.send("home Route");
})
app.listen(3000,()=>console.log("App started on PORT 3000"))
