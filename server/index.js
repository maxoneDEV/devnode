const http = require('http');

//http.createServer((req, res) => {

//});


const server = http.createServer();


server.on('request', (req, res) => {
 res.write("Hello Node\n");
 //res.end();

 setTimeout(() => {
   res.write("Still on....");
   res.end();
 }, 2000);
 
});

server.listen(8080);
