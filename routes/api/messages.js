// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');
// load Message model
const Message = require('../../models/Message');

// @route GET to api/messages/(recipient _id)
// @desc Get messages associated with selected recipient
// protected route
router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Message.find({ recipient: req.params.id })
      .sort({ scheduleDate: -1 })
      .then(message => res.json(message))
      .catch(err => res.json(err));
  }
);

// @POST to api/messages
// @desc Add a new message to a specific recipient
// protected route
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newMessage = new Message({
      recipient: req.recipient.id,
      title: req.body.title,
      message: req.body.message,
      scheduleDate: req.body.scheduleDate
    });
    newMessage
      .save()
      .then(message => res.json(message))
      .catch(err => res.json(err));

  }
);

// @PUT to api/messages/(message _id)
// @desc Update any specific message
// protected route
router.put("/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Message.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(message => {
        res.json(message);
      })
      .catch(err => res.json(err));
  }
);

// @DELETE to api/messages/(message _id)
// @desc Delete an existing message
// protected route
router.delete("/:id",
  passort.authenticate("jwt", { session: false }),
  (req, res) => {
    Message.remove({ _id: req.params.id })
      .then(message => {
        res.json(message);
      })
      .catch(err => res.json(err));
  }
);

module.exports = router;