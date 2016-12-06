module.exports = function (passport, Account) {
  const LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy((username, password, done) => {
    Account.findOne({ name: username, password: password }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Account.findById(id, (err, user) => {
      done(err, user);
    });
  });
}