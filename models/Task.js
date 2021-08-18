const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    project: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    time: {
        type: Number,
        default: 0
    },
    priority: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    },
    pending: {
        type: Boolean,
        default: true
    },
    onLocal : {
        type: Boolean,
        default: false
    },
    onStaging: {
        type: Boolean,
        default: false
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    inProgress: {
        type: Boolean,
        required: true,
        default: false
    },
    blocked: {
        type: Boolean,
        required: true,
        default: false
    },
    jira: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    rank: {
        type: Number,
        default: null
    }
});


module.exports = mongoose.model('Task', TaskSchema);