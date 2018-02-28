var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        minlength: 2,
        unique: true
      },
      password: {
        type: String,
        required: true,
        minlength: 6
      }
})

var User = mongoose.model('User', UserSchema)

module.exports = { User }