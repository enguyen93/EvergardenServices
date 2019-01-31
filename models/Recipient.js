// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create Schema
const RecipientSchema = new Schema({

  _id: Schema.Types.ObjectId,

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
  messages:
    [{
      type: Schema.Types.ObjectId,
      ref: 'messages'
    }]
});
module.exports = Recipient = mongoose.model('recipients', RecipientSchema);
