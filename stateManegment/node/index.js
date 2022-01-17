const http = require('http');
const port = 3000;

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello World!</h1>');
})
server.listen(port, ()=>{
    console.log(`Server is running on localhost:${port}`);
});