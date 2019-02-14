// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create Schema
const MessageSchema = new Schema({
  // relational data (reference to currently selected recipient)
  recipient: {
    type: Schema.Types.ObjectId,
    ref: "recipients"
  },
  // message data
  message: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  scheduleDate: {
    type: String,
    required: true
  },
  isSent: {
    type: Boolean,
    required: true,
    default: false,
  }
});
module.exports = Message = mongoose.model('messages', MessageSchema);
