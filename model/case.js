const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseModel = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    case_id: {
        type: String,
        unique: true,
        required: true
    },
    title: String,
    created: Number,
    creator: String,
    last_updated: Number,
    user_update: String,
    type: String,
    status: {
        type: String,
        enum : ['open', 'close'],
        default: 'open'
    },
    severity: {
        type: String,
        enum : ['low', 'medium', 'high', 'critical'],
        default: 'medium'
    },
    description: String,
    sla: Number,
    owner: String,

});

module.exports = mongoose.model('case', caseModel);