// dependencies
const express = require('express');
const router = express.Router();

// load mongoose models
const Recipient = require('../../models/Recipient');
const Message = require('../../models/Message');

// @route GET to api/messages
// @desc Get all messages associated with selected recipient
router.get('/all', (req, res) => {
  Recipient.find({ messages })
    .sort({ scheduleDate: -1 })
    .then(message => res.json(message));
});

// @POST to api/messages
// @desc Add a new message to a specific recipient
router.post('/add', (req, res) => {
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
router.put("/:id", function(req, res) {
  // Create a new Message and pass the req.body to the entry
  Messages.create(req.body)
    .then(function(newMessage) {
      // If a Message was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return Messages.findOneAndUpdate({ _id: req.params.id }, { message: newMessage._id }, { new: true });
    })
    .then(function(newMessage) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(newMessage);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

module.exports = router;