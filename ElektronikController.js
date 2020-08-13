var path = require('path');
module.exports.home=function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
  }
  module.exports.bilgisayar=function(req,res){
    res.sendFile(path.join(__dirname,'login.html'));
  }
