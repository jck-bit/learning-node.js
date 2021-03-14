<<<<<<< HEAD
/*
// easier way of creating a route

const http = require("http");

const routes = {
    '/':function index(request,response){
        response.WriteHead(200);
        response.end("Node Routing");
    },
    '/aboutus':function aboutus(request,response){
        response.end("This is about page");
    }
}

http.createServer(function(req,res){
    if(req.url in routes){
        return routes(req.url)(req,res);
    }
}).listen(process.env.PORT || 8000);
*/

// a path module
const path = require("path");

let dir = "learning node"

file = path.join('c:','Users/jack/Desktop',dir,'test.json');
console.log(file);
=======
// easier way of creating a route

const http = require("http");

const routes = {
    '/':function index(request,response){
        response.WriteHead(200);
        response.end("Node Routing");
    },
    '/aboutus':function aboutus(request,response){
        response.end("This is about page");
    }
}

http.createServer(function(req,res){
    if(req.url in routes){
        return routes(req.url)(req,res);
    }
}).listen(8000);

>>>>>>> 83ad99f75e4d6c72ca6a8147369620c1abacd563
