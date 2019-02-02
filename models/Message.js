// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create schema
const MessageSchema = new Schema({
  // relational data (reference to currently selected recipient)
  _recipientId: {
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
    type: Date,
    required: true
  }
});
module.exports = Message = mongoose.model('messages', MessageSchema);
