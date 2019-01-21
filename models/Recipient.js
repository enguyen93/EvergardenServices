// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create Schema
const RecipientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  scheduleDate: {
    type: Date,
    required: true
  }
});
module.exports = Recipient = mongoose.model('recipients', RecipientSchema);
