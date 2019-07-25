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
        //store the total difference
        var totalDifference = 0;
        //store the result for each subtraction from the scores
        var result = 0;
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

        //make a new array to store another array of objects with
        //total difference in the scores
        var newTableWithTotalDifference = [];

        //outer for loop to iterate the entire array of object from friends
        for (var i = 0; i < friends.length; i++) {

            //reset the total difference for the next object person
            totalDifference = 0;

            //inner for loop to calculate the new Person from the user Input off req.body
            for (var j = 0; j < userScores.length; j++) {

                //subtract each object score from first element to the last element of the array
                result = parseFloat(friends[i].scores[j]) - parseFloat(userData.scores[j])

                //sum up the subtraction and stores in total difference and change the values to be positive
                totalDifference += Math.abs(result)

                //inserts into a new array of object for sorting the least total difference
                newTableWithTotalDifference.push({
                    currentTable: friends[i].name,
                    totalDifference: totalDifference,
                    photo: friends[i].photo
                })
            }
        }
        //add a new person to our table from 
        //userInput that is stored in req.body
        friends.push(userData);

        //sorts the new array of object against the total difference
        newTableWithTotalDifference.sort(function (a, b) {
            return a.totalDifference - b.totalDifference
        })

        console.log(newTableWithTotalDifference)

        //returns first element and response back the total least difference to the           //client during the post request 
        res.json(newTableWithTotalDifference[0]);

    });

}