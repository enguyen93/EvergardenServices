// dependencies
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
// load mongoose models
const Recipient = require('../../models/Recipient');

// @route GET to api/recipients
// @desc Get all recipients associated with current user
router.get('/', (req, res) => {
  Recipient.find({ recipients })
    .sort({ name: 1 })
    .then(recipient => res.json(recipient));
});

// @POST api/recipients
// @desc add new Recipient
router.post('/', (req, res) => {
  Recipient.findOne({ email: req.body.email })
    .populate('_userId')
    .then(recipient => {
      if (recipient) {
        return res.status(400).json({ email: 'Recipient already exists' });
      }
      const newRecipient = new Recipient({
        _userId: req.user._id,
        name: req.body.name,
        email: req.body.email
      });

      newRecipient
        .save()
        .then(recipient => res.json(recipient))
        .catch(err => console.log(err));
    });
});

// @DELETE api/recipients
// @desc allow Users to Delete a Recipient
router.delete('/:id', (req, res) => {
  Recipient.remove({ _id: req.params.id })
    .then((dbRecipient) => {
      res.json(dbRecipient);
    });
});

// @UPDATE api/recipients
// @desc Update an existing Recipient
router.put('/:id', (req, res) => {
  Recipient.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
  .populate('')
    .then((dbRecipient) => {
      res.json(dbRecipient);
    });
});

module.exports = router;