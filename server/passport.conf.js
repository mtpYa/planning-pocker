module.exports = function (passport) {
  var LocalStrategy = require('passport-local').Strategy;

  var users = require('./users.json');

  passport.use(new LocalStrategy((username, password, done) => {
    var user;
    users.forEach(usr => {
      if (usr.name === username && usr.password === password) {
        user = {
          name: usr.name,
          password: usr.password
        }
      }
    });
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}