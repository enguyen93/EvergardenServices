// dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');
// load mongoose models
const Recipient = require('../../models/Recipient');

// @route GET to api/recipients
// @desc Get all recipients associated with current user through req.user.id
// protected route
router.get('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Recipient.find({ user: req.user.id })
      .sort({ name: 1 })
      .then(recipient => res.json(recipient));
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
          .catch(err => console.log(err));
      });
  }
);

// @DELETE api/recipients
// @desc allow Users to Delete a Recipient
// protected route
router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Recipient.remove({ _id: req.params.id })
      .then((dbRecipient) => {
        res.json(dbRecipient);
      });
  }
);

// @UPDATE api/recipients
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
      .populate('')
      .then((dbRecipient) => {
        res.json(dbRecipient);
      });
  }
);

module.exports = router;