var express= require('express');

var router= express.Router();

var controller=require('../controller/ElektronikController');

router.get('/',controller.home);
router.get('/bilgisayar',controller.bilgisayar);

module.exports=router;