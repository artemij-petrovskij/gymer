const {Schema, model} = require('mongoose')

const users = new Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}) 
module.exports = model('users', users)