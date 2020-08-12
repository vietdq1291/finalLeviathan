'use strict';
//var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/Views'));

app.get('/', function (req, res) {
    res.render(path.join(__dirname, '/Views', 'Home'));
});

app.get('/Home', function (req, res) {
    res.render(path.join(__dirname, '/Views', 'Home'));
});

app.get('/NewCollection', function (req, res) {
    res.render(path.join(__dirname, '/Views', 'NewCollection'));
});

app.get('/About', function (req, res) { 
    res.render(path.join(__dirname, '/Views', 'about'));
});

app.get("/Details/:id", function (req, res) {
    let ID = req.params.id;
    let items = fs.readFileSync("data/data.json", "UTF-8");
    items = JSON.parse(items);
    let count = 0;
    items.map(e => {
        count++;
        if (e.id === parseInt(ID)) {
            res.render("details", {
                news: e
            });
            count = 0;
        }
    });
    if (count >= cats.length) {
        res.render("notfound");
    }
});


 
var server = app.listen(port, function () {
    console.log('Node is running..');
});
 
 