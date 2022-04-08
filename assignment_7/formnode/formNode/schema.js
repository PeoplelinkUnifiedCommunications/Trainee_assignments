const mongoose = require('mongoose')

const userData = mongoose.Schema({
    name: String
})

const users = mongoose.model('users', userData)
module.exports = users