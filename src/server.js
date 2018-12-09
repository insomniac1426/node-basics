import { serverStart } from './help';
var http = require('http');
const PORT = 8000

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("hey, this is a node reserver response !")
    res.end();
}).listen(PORT, serverStart(PORT));