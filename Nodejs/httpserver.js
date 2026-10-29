const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((req , res)=>{
    console.log(req,url);
    res.statusCode = 200;
    res.setHeader('Content-type','text/html')
    res.end('<h1> This is Barry</h1> <p> Hey this is the way to rock the world!</p>');
})

server.listen(port ,()=>{
    console.log(`server is listening on port ${port}`);
});
