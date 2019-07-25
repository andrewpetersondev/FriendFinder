// dependencies
// ===================================================
var friends = require('../data/friends');

// routing
// ===================================================
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;
        var closestMatch = {
            name: "",
            photo: "",
            pointDifference: 0
        };
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        console.log(userData);
        console.log(userName);
        console.log(userPhoto);
        console.log(userScores);

        res.json(userData);

    });

}