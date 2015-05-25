var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(process.env.PORT, process.env.IP, function(){
    console.log('Express Server rodando - ' + process.env.IP + ":" + process.env.PORT);
});