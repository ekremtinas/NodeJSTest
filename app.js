var http=require('http');

var fs=require('fs');
var debug=require('debug');
var express=require('express');//Express Modülü import edildi.
var path = require('path');
var app=express();//Express'in nesnesi türetildi.





var routeElektronik=require('./app_server/routes/ElektronikRoute');//Elektronik'in Route'u import edildi.

app.use('/public',express.static(path.join(__dirname,'public')));//Public klasörü genel'e açıldı.Erişim sağlanır.


app.use(function(req,res,next){//Kendi Middleware yazılışı.
console.log('url...:'+req.originalUrl)
console.log('time:'+Date.now())
next();//Middleware arası zinciri bağlar.
});


app.use('/elektronik',routeElektronik)//Elektronik'in route'u express ile kullanıldı.Devamı Elektronik Route'da..

app.listen(9000);//Port dinlendi.



