// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create Schema
const RecipientSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  messages: [
    {
      message: {
        type: String,
        required: true
      },
      title : {
        type: String,
        required: true
      },
      scheduleDate: {
        type: String,
        required: true
      }
    }
  ]
});
module.exports = Recipient = mongoose.model('recipients', RecipientSchema);
//Putting a messages array into the Recipient model instead of having a separate table of messages
//