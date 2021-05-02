//session
const express = require("express")
const app = express()
const session = require("express-session")

const PORT = process.env.PORT || 3000

app.use(session({
  secret:"Your secret key",
  resave:true,
  saveUninitialized:true
}))

app.get("/",(req,res)=>{
  var name ='John';
  return res.send('session set')
})

app.get("/session",(req,res)=>{
  var name = req.session.name;
})

app.listen(PORT,()=>{
  console.log('listening the request on http://localhost:$(PORT)')
})