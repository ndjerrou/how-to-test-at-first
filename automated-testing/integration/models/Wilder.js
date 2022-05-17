const mongoose = require('mongoose')

const SchemaWilder = mongoose.Schema({
    name: String,
    city: String,
    skills: [{title: String, votes: Number}]
})

const wilder = mongoose.model('Wilders', SchemaWilder)

module.exports = wilder