var http=require('http');
var fs=require('fs')
// http.createServer((req,res)=>{
//     // res.write('Hello World!!')
//     res.write(req.url)
//     res.end()
//     console.log('Server running......')
// }).listen(8080);
var url=require('url')
var adr='http://localhost:8080/home.html?year=2018&month=feb'
var q=url.parse(adr,true)
console.log(q.search)
http.createServer((req,res)=>{
    fs.unlink('text.txt',(err)=>{
        if(err) throw err;
        console.log('file deleted')
    })
}).listen(8080);