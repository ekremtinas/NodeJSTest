var http=require('http');

var fs=require('fs');


var route= new Object();
var homeController=function(req,res){
    fs.readFile('index.html',function(err,data){
        res.write(data);
        
        res.end('mesaj bitti');
    });
}


var loginController=function(req,res){
    fs.readFile('login.html',function(err,data){
        res.write(data);
        
        res.end('mesaj bitti');
    });
}
 route['/']=homeController;
 route['/login']=loginController;

var server =http.createServer(function(req,res){

    if(req.url in route)
        route[req.url](req,res);
   

  
    
});
server.listen(8000);