var express = require('express');
var app = express();
var SERVER_PORT = 5500;
app.use(express.static('client'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + './../client/index.html');
});
app.listen(SERVER_PORT, function () {
    console.log("Server is up and running at port " + SERVER_PORT);
});
//# sourceMappingURL=index.js.map