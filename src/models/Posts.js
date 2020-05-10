const mongoose = require('../database')
const Schema = mongoose.Schema

const postsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('posts', postsSchema)
