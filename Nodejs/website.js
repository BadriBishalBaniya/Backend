const { fstat } = require('node:fs');
const fs = require('fs');
const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-type', 'text/html')
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is Barry</h1> <p> Hey this is the way to rock the world!</p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end(data.toString());
    }
    else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());;
    }
    
    else{
        // res.barry(); // This function causes the server to crash because it is not defined. To avoid manually restarting the server after fixing the error, we use Nodemon, which automatically restarts the server when we save changes to the code.
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> Hey this page was not found on the server</p>');
    }

})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
