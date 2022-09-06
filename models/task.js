// Setting up model and schema for the database
// importing mongoose
const mongoose = require('mongoose')

// declaring the schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must be provided'],
        trim: true,
        maxlength: [20, 'name can not be more than 20']
    },
    completed: {
        type: Boolean,
        default: false

    }
})


// exporting the schema
module.exports = mongoose.model('Task', TaskSchema)