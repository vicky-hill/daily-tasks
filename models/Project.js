const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    }
});


module.exports = mongoose.model('Project', ProjectSchema);