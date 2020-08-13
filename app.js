var http=require('http');

var fs=require('fs');

var express=require('express');
var path = require('path');
var app=express();

var controllerElektronik=require('./ElektronikController');


app.use('/public',express.static(path.join(__dirname,'public')));





app.get('/',controllerElektronik.home);

app.get('/login',controllerElektronik.bilgisayar);

app.listen(9000);



