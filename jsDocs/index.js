var express = require('express');
var app = express();
var SERVER_PORT = 5500;
app.get('/', function (req, res) {
    res.status(200).json("Server is good");
});
app.listen(SERVER_PORT, function () {
    console.log("Server is up and running at port " + SERVER_PORT);
});
//# sourceMappingURL=index.js.map