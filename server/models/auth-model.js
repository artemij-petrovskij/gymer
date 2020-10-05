const { Schema, model } = require('mongoose')

const users = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    weight:
        [[0]]
    ,
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})
module.exports = model('users', users)