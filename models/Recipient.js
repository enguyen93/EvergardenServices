// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create Schema
const RecipientSchema = new Schema({
  // relational data (reference to currently logged in user)
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  // recipient data
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
module.exports = Recipient = mongoose.model('recipients', RecipientSchema);
