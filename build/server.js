/*
 ////////////////////////////////////////////////////////
 // Our Better World
 // @version vv1.0.0
 // @link https://www.ourbetterworld.org/
 // @license 
 // @Coding by obw - XXXXXXXXXX
 // @obw@email.com
 ////////////////////////////////////////////////////////
*/// server.js

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function() {
	console.log('Your node js server is running');
});
