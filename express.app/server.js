//cookies in node.js
const express = require("express")
const app = express()
const cookies = require("cookie-parser")


const PORT = process.env.PORT || 3000

app.use(cookies());

let users = {
  name :"john",
  age : 28
} 



app.get("/",(req,res)=>{
  res.send("cookies-tutorial");
});

app.get("/setuser",(req,res)=>{
  res.cookie("userdata",users)
  res.send("user data added to cookies");
})

app.get("/getuser",(req,res)=>{
  res.send(req.cookies)
})

app.get("/logout",(req,res)=>{
  res.clearCookie('userdata')
  res.send("user logout succesfully");
})

app.listen(PORT,()=>{
  console.log('listening request on http://localhost:$(PORT)');
})