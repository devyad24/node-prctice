const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('index.html','utf-8', (err, data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if(req.url === '/about'){
        fs.readFile('about.html', 'utf-8', (err, data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else if(req.url === '/contact-me'){
        fs.readFile('contact-me.html', 'utf-8', (err, data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else{
        fs.readFile('404.html', 'utf-8', (err, data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
}).listen(6969, () => console.log("Listening to PORT 6969"));