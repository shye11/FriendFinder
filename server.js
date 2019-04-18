// dependancies
var express = require('express');
var bodyParser = require('body-parser');

// express server & defining  PORT
var app = express();
var PORT = process.env.PORT || 8889;

// data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// link to route files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// start server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})