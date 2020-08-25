

module.exports=function(app){//Kurucu fonksiyon app.jsdeki require sayesinde çağrıldı ve içerisindeki içerik kullanıldı.
    var routeLogin=require('./loginRoutes');
    var routeHome=require('./homeRoutes');
    app.use('/login',routeLogin);
    app.use('/',routeHome);
    
}