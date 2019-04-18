// loading existing data from friends.js
var friendData = require('../data/friends.js');

// routing starts here
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function (req, res) {
        // populating arrays for comparison
        var reqBody     = req.body;

        // declaring local variables
        var bestMatch   = [];
        var friendName;
        var friendPic;
        var compOne;
        var totalMatch;

        // finding the best match
        for(var i=0; i<friendData.length; i++){
            friendName  = friendData[i].name;
            friendPic   = friendData[i].photo;
            totalMatch  = 0;
            for(var j=0; j<10; j++){
                compOne = (friendData[i].scores[j] - parseInt(reqBody.scores[j]));
                if (compOne < 0){
                    compOne = compOne * -1;
                }
                totalMatch += compOne;
            }
            
            // populating best match
            if ((bestMatch.length === 0 ) || (totalMatch < bestMatch.point)){
                bestMatch = {
                    name:  friendName,
                    photo: friendPic,
                    point: totalMatch
                }
            } 
        }
        
        // adding the new friend to the array after matching is complete
        friendData.push(req.body);
        res.json(bestMatch);
    })
}
