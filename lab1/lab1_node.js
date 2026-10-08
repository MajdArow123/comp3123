/* Purpose
we will use Node to create a server ans then listen on that server for any incoming request . then return response .
*/

var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, 
        {'Content-Type': 'text/plain'});
    res.end('The server is now runninng successfully and listening on port 3000');
}).listen(3000);

// optional Homework: try onther port numeber