const mongoose = require('../database')
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
    name: {
        type: String, 
        require: true
    },
    slug: {
        type: String,
        require: true,
    },
    description: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('categories', categoriesSchema)
