const mongoose = require('mongoose')
const shortId = require('shortid')


const shortUrlsSchema = new mongoose.Schema({
    full: {
        required: true,
        type: String,
    },
    short: {
        required: true,
        type: String,
        default: shortId.generate
    },
    clicks: {
        required: true,
        type: Number,
        default: 0,
    },
})

module.exports = mongoose.model('ShortUrl',shortUrlsSchema)