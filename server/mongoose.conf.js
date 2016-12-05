var mongoose = require('mongoose').set('debug', true);

var options = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  }
};

var mongodbUri = 'mongodb://pockerUser:pockerUser@ds119578.mlab.com:19578/planning-pocker';

mongoose.connect(mongodbUri, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var accountSchema = mongoose.Schema({
  name: String,
  password: String
});

var Account = mongoose.model('Account', accountSchema);

module.exports = {
  Account
};