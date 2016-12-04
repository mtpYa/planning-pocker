var express = require('express');
var passport = require('passport');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');

require('./passport.conf')(passport);

var app = express();

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
});