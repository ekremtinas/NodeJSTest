var http=require('http');

var fs=require('fs');

var express=require('express');
var path = require('path');
var app=express();





var routeElektronik=require('./app_server/routes/ElektronikRoute');

app.use('/public',express.static(path.join(__dirname,'public')));





app.use('/elektronik',routeElektronik)

app.listen(9000);



