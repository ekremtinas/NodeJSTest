var path = require('path');//Path modülü import edildi.
module.exports.home=function(req,res){//home sayfası ElektronikController olarak export edildi. 
  console.log(req.deneme)  
  res.sendFile(path.join(__dirname,'../../index.html'));
  }
  module.exports.bilgisayar=function(req,res){//bilgisayar sayfası ElektronikController olarak export edildi. 
    res.sendFile(path.join(__dirname,'../../login.html'));
  }
