var http = require('http');
var url = require('url');

//http://localhost:8080/default.htm?year=2017&month=february';

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query; //returns an object: { year: 2017, month: 'february' }
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);