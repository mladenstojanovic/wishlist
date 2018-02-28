const mongoose = require('mongoose');

/**
 * Tells mongoose to user Promises, and connects to database
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/GiftList', {
  useMongoClient: true
});

module.exports = {
  mongoose
};