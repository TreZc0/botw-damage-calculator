// Module dependencies

var express    = require('express'),
    bodyParser = require('body-parser'),
    passport   = require('passport');
var fs = require('fs');
var fse = require('fs-extra');
const config = require('./config');
var searchResults = [];
var heading = [];
var specification = [];


// Configuration
var app = module.exports = express();
 // Serve up content from public directory
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/jsons',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());


// Main route sends our HTML file

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});




app.listen(8080);
console.log("Express server listening on port 8080 in %s mode", app.settings.env);
