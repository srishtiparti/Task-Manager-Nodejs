const express = require('express')
const path = require('path');
const app = express()

//setting path for public folder (js and css files) and views (for html file) 
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
//defining view engine to be used
app.set('view engine', 'ejs');