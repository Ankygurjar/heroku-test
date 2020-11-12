var express = require('express');
var app = express();
var PORT = process.env.PORT || 5500;
var data = require('./data.json');
app.use(express.static('client'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + './../client/index.html');
});
app.get('/players', function (req, res) {
    res.send(data);
});
app.listen(PORT, function () {
    console.log("Server is up and running at port " + PORT);
});
//# sourceMappingURL=index.js.map