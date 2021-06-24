const mongoose = require('mongoose');
const moment = require('moment-timezone');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
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
    date: {
        type: String,
        default: moment.tz(Date.now(), "America/Los_Angeles").format().split('T')[0]
    }
});


module.exports = mongoose.model('Task', TaskSchema);