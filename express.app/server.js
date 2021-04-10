//working with static files in node.js

const express = require("express");
const app = express();

app.use(express.static('public'));
<img src= "/img.jpg"></img>

app.get('/.', function(req,res){
    res.send('static files');
})

app.listen(3000,()=>console.log("app started in port 3000"))