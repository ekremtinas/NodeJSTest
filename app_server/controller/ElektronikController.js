/*var path = require('path');//Path modülü import edildi.
module.exports.home=function(req,res){//home sayfası ElektronikController olarak export edildi. 
  console.log(req.deneme)  
  res.render('elektronik');//Hangi view'in çağrılacağı belirtildi./*View'e veri gönderme Json ile olur*/
   
  }
  module.exports.bilgisayar=function(req,res){//bilgisayar sayfası ElektronikController olarak export edildi. 
    var users=['Ekrem','Emin','Hasan','Mertcan'];
    res.render('bilgisayar',{mesaj:"Test",kisiler:users});//Hangi view'in çağrılacağı belirtildi./*View'e veri gönderme Json ile olur*/
   
  }
*/