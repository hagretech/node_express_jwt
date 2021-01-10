const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
})


const User = mongoose.model('user', UserSchema)

module.exports = User