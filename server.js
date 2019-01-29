require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./client/config/passport");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//use sessions to keep track of user login status
app.use(
  session({ secret: "thisisfun", resave: true, saveUninitialized: true})
);

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

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