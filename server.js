require("dotenv").config();
var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

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