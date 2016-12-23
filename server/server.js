const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose')
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
  const newRoom = new Room(req.body.room);
  newRoom.save((err, createdRoom) => {
    if (err) {
      next(err);
    } else {
      res.send(createdRoom);
    }
  });
});

app.get('/allusers/:id', (req, res, next) => {
  const roomId = req.params.id;
  Room.findById(roomId, (err, room) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(room.users);
    }
  });
});

app.get('/oldroom/:id', (req, res, next) => {
  Room.findById(req.params.id, (err, oldRoom) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(oldRoom);
    }
  });
});

app.post('/newuser', (req, res, next) => {
  Room.findById(req.body.user.roomId, (err, room) => {
    if (err) {
    res.status(500).send(err);
    } else {
      var userId = new mongoose.Types.ObjectId;
      var userInfo = {
        name: req.body.user.name,
        id: userId
      };
      room.users.push(userInfo);

      room.save( (err, changedRoom) => {
          if (err) {
              res.status(500).send(err)
          } else {
            res.send(userInfo);
          }
      });
    }
  });
});

app.use((err, req, res, next) => {
  res.status(500).send('Error: ' + err.stack);
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
