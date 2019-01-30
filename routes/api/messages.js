// dependencies
const express = require = ('express');
const router = express.Router();

// load mongoose models
const User = require('../../models/User');
const Recipient = require('../../models/Recipient');
const Message = require('../../models/Message');

// @route GET to api/messages
// @desc Get all messages associated with selected recipient
router.get('/messages', (req, res) => {
  Recipient.find({ messages })
    .sort({ scheduleDate: -1 })
    .then(message => res.json(message));
});

// @POST to api/messages
// @desc Add a new message to a specific recipient
router.post('/messages', (req, res) => {
  const newMessage = new Message({
    title: req.body.title,
    message: req.body.message,
    scheduleDate: req.body.scheduleDate
  });

  newMessage
    .save()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});

// @PUT to api/messages
// @desc Update any specific message
router.put('/messages', (req, res) => {
  const updateMessage = dbMessage => {
    Message.findOneAndUpdate(
      { _id: req.params.id },
      { message: dbMessage._id },
      { new: true })
      .then(message => res.json(message))
      .catch(err => console.log(err));
  };
});

module.exports = router;