const mongoose  = require("mongoose");

const MessageSchema = new mongoose.Schema({
    fname: {type: String},
    lname: {type: String},
    email: {type: String},
    msg: {type: String}, 
    msg_date: {
        type: Date,
        required: true,
        default: new Date()
    }
})

module.exports = mongoose.models.Message || mongoose.model('Message', MessageSchema)