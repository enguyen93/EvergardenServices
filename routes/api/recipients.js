// dependencies
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
// load mongoose models
const User = require('../../models/User');
const Recipient = require('../../models/Recipient');

// @route GET to api/recipients/all
// @desc Get all recipients associated with current user
router.get('/all', (req, res) => {
  User.find({ recipients })
    .sort({ name: 1 })
    .then(recipient => res.json(recipient));
});

// @POST api/recipients/addNew
// @desc add new Recipient
router.post('/addNew', (req, res) => {
  Recipient.findOne({ email: req.body.email })
  .populate('user')
  .then(recipient => {
    if (recipient) {
      return res.status(400).json({ email: 'Recipient already exists' });
    }
    const newRecipient = new Recipient({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      user: user._id
    });

    newRecipient
      .save()
      .then(recipient => res.json(recipient))
      .catch(err => console.log(err));
  });
});

module.exports = router;