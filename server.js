require("dotenv").config();
var express = require("express");
var session = require("express-session");
var db = require("./models");

var PORT = process.env.PORT || 3000;
var app = express();



/* Add routes, both API and view
app.use(routes);*/

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clear the testdb

if(process.env.NODE_ENV ==="test") {
  syncOptions.force = true;
}



// Start the server
db.sequelize.sync(syncOptions).then(function(){
  app.listen(PORT, function(){
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;