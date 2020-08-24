/*var express= require('express');//Express import edildi.

var router= express.Router();//Express'in router fonk. kullanılmak üzere türetildi.

var controller=require('../controller/ElektronikController');//Elektronik'in Controller'ı import edildi.Devamı Controller da...

router.use(function(req,res,next){//Route'da middleware kullanımı yapıldı.Log,Auth gibi işlemlerde işe yarar.
    req.deneme="Test";//Kullanıcıya karşılık verebilen bir değişken tanımlanarak contrlr.'da bu değişkeni kullanarak kontrol edilip reesponse edilebilecek.
    console.log('elektronikRoutes çağrıldı');
    next();
});

router.get('/',controller.home);//Router fonk ile get kullanılarak gelen request'e göre controller'daki export edilen home(elektronik) sayfası response edildi.
router.get('/bilgisayar',controller.bilgisayar);//Router fonk ile get kullanılarak gelen request'e göre controller'daki export edilen bilgisayar sayfası response edildi.

module.exports=router;//Bu route'ı app.js'de kullanabilmek için export ettik.

*/