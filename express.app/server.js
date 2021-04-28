//Express form in node.js
 
const express = require("express")
const path = require("path")
const app =express ()

const PORT = process.env.PORT || 2000

app.set("views",path.join(__dirname,'views'));
app.set('view engine','pug')

app.use(express.urlencoded({
  extended:true
}))


app.get('/',(req,res)=>{
  res.render("index",{title:"form handling"});  
})

app.post("/form_submit",(req,res)=>{
  const username = req.body.username
  const email = req.body.email
  res.end("Your username is:$(username) and email is $()")
})


app.listen(PORT,()=>{

    console.log('listening to requests on http://localhost:${PORT}');
})