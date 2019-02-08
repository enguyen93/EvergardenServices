// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');
// load Recipient Model
const Recipient = require('../../models/Recipient');

// @route GET to api/recipients
// @desc Get all recipients associated with current user through req.user.id
// protected route
router.get('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Recipient.find({ user: req.user.id })
      .sort({ name: 1 })
      .then(recipient => res.json(recipient))
      .catch(err => res.json(err));
  }
);

// @POST api/recipients
// @desc add new Recipient with the current User's id
// protected route
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Recipient.findOne({ email: req.body.email })
      .then(recipient => {
        if (recipient) {
          return res.status(400).json({ email: 'Recipient already exists' });
        }
        const newRecipient = new Recipient({
          user: req.user.id,
          name: req.body.name,
          email: req.body.email
        });

        newRecipient
          .save()
          .then(recipient => res.json(recipient))
          .catch(err => res.json(err));
      });
  }
);

// @DELETE api/recipients/(recipient _id)
// @desc allow Users to Delete a Recipient
// protected route
router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Recipient.findOneAndDelete({ _id: req.params.id })
      .then((recipient) => {
        res.json(recipient);
      })
      .catch(err => res.json(err));
  }
);

// @UPDATE api/recipients/(recipient _id)
// @desc Update an existing Recipient
// protected route
router.put('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Recipient.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then((recipient) => {
        res.json(recipient);
      })
      .catch(err => res.json(err));
  }
);

module.exports = router;