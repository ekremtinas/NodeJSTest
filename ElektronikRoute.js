var express= require('express');

var router= express.Router();

var controller=require('./ElektronikController');

router.get('/',controller.home);
router.get('/bilgisayar',controller.bilgisayar);

module.exports=router;