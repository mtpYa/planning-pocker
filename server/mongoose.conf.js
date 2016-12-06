const mongoose = require('mongoose').set('debug', true);

const options = {
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

const mongodbUri = 'mongodb://pockerUser:pockerUser@ds119578.mlab.com:19578/planning-pocker';

mongoose.connect(mongodbUri, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const accountSchema = mongoose.Schema({
  name: String,
  password: String
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
  Account
};