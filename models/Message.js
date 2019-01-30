// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create schema
const MessageSchema = new Schema({

  _id: Schema.Types.ObjectId,

  message: {
    type: String,
    required: true
  },
  title : {
    type: String,
    required: true
  },
  scheduleDate: {
    type: Date,
    required: true
  }
});
module.exports = Message = mongoose.model('messages', MessageSchema);
