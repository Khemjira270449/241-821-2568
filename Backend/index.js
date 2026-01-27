//ทำการ
const http= require('http');
const host = 'localhost';
const post = 8000;

//กำหนด
const requestListener = function(req, res) {
    res.writeHead(200);
    res.end('My First Server!');
}

//run server
const server = http.createServer(requestListener);
server.listen(prot, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
}); 
