var http = require('http');
var app = require('../app'); // The express app we just created

var port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);