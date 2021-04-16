//Express form in node.js

//   

const express = require("express")
const path = require("path")
const app =express ()

const PORT = process.env.PORT || 2000

app.set("views",path.join(__dirname,'views'));
app.set('view engine','pug')

app.get('/',(req,res)=>{
  res.render("index",{title:"form handling"});  
})

app.listen(PORT,()=>{
    console.log('listening to requests on http://localhost:${PORT}');
})