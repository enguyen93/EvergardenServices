// dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
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

router.get(
  '/',
  //Protected Route
  //A Find to find all the recipients that have a id exactly like the req.user.id
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Recipient.find({user: req.user.id})
      .then(recipients => res.json(recipients));
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newRecipient = new Recipient({
      name: req.body.name,
      email: req.body.email,
      user: req.user.id,
    });
//Protected Route
//Above should be making a new recipient with the User's id to reference to the recipient later
    newRecipient.save().then(recipient => res.json(recipient))
  }
);

router.post(
  '/message',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //Here we're looking through Recipients to find an _id that matches the message(?) id
    Recipient.findOne({ _id: req.body._id })
    .then(recipient => {
      recipient.messages.push({
        message: req.body.message,
        title: req.body.title,
        scheduleDate: req.body.scheduleDate
      })
      recipient.save().then(recipient => res.json(recipient));
    })
  }
);
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
        user: req.user.id,
        name: req.body.name,
        email: req.body.email,
      });

      newRecipient
        .save()
        .then(recipient => res.json(recipient))
        .catch(err => console.log(err));
    });
});

module.exports = router;