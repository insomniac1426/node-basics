var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("hey, this is a node reserver response !")
    res.end();
}).listen(8000);