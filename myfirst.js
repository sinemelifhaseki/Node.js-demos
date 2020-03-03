var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Current date/time: " + dt.myDateTime());
    res.write(req.url);
    res.end("\n"+'My first Node.js app with a module!');
}).listen(8080);