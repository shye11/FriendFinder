// dependancies
var path    = require('path');

// routes
module.exports = function(app){
    // survey route
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
    
    // route to home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}