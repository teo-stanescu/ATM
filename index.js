const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

/* app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));