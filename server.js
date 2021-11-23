const http = require('http');



http.createServer((req, res) => {
    res.end('Welcome');
}).listen(5000, () => {
    console.log('listening on port 5000');
})


