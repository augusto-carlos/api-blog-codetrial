const mongoose = require('../database')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    isAdmin: {
        type: Number,
        default: 0
    }
}, {timestamps: true })

module.exports = mongoose.model('users', usersSchema)
