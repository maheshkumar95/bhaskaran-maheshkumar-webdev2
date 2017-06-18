var app = require('./express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(session({ secret: "assignment5"}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
require('./utilities/filelist');

app.use(app.express.static(__dirname + '/public'));

// var blog = require('./lectures/graduate/blog/app');
// blog(app);

// var todo = require('./lectures/undergraduate/todo/app');
// todo(app);

// require ("./test/app.js")(app);

require('./assignment/graduates/app');
app.listen(process.env.PORT || 3000);