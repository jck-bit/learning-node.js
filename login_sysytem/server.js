const express = require("express");
const app = express();

const PORT = process.env.PORT ||3000;

app.set("view engine","ejs");

//home route

app.get("/", (req,res)=>{
    res.render('base',{title:'login system'});
})

app.listen(PORT,()=>{console.log('listening to the server on the srver on http://localhost:3000')});