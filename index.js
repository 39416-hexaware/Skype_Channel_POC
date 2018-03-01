//imports
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var builder = require('botbuilder');

app = express();
//Create express object

var port = process.env.PORT || 3000;
//Assign port

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Configuring express app behaviour

app.get("/Skype", function (req, res) {
    res.send("Skype Channel works");
});

app.post("/Skype", function (req, res) {
    console.log(req);
});

console.log("Server Running at Port : " + port);

app.listen(port);