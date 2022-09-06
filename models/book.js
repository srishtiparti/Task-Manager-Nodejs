// Setting up model and schema for the database
// importing mongoose

const mongoose = require('mongoose')
    // the schema
const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must be provided'],
        trim: true,
        maxlength: [60, 'name can not be more than 20']
    },
    read: {
        type: Boolean,
        default: false
    }
})

// exporting schema
module.exports = mongoose.model('Book', BookSchema)