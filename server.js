// dependencies
// ============================================================
var path = require('path');
var express = require('express');

// express 
// ============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// express middleware
// ============================================================
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// router
// ============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
// ============================================================
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});