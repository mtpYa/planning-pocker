const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const Account = require('./mongoose.conf').Account;
const Room = require('./mongoose.conf').Room;

require('./passport.conf')(passport, Account);

const app = express();

const server = require('http').Server(app);
require('./sockets')(server);

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

app.post('/newroom', (req, res, next) => {
  var newRoom = new Room(req.body.room);
  newRoom.save((err, createdRoom) => {
    if (err) {
      next(err);
    } else {
      res.send(createdRoom);
    }
  });
});

app.post('/newuser', (req, res, next) => {
  res.send(req.body);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Error: ' + err.stack);
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
