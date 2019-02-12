'use strict';

// require your mailgun package

var   mongoose = require('mongoose'),
      Recipient = mongoose.model('Recipient'),
      Message = mongoose.model('Message')
      mailgun_api = process.env.MAILGUN_APIKEY,
      mailgun_domain = process.env.MAILGUN_DOMAIN,
      Mailgun = require('mailgun-js'),
      cron = require("node-cron"),
      Q = require('q'),
      moment = require('moment');
      express = require("express");
      require('dotenv').config();
      app=express();

      
      

// find recipients that match criteria
var mailRecipients = mailDay => {
  console.log('Recipients fired');
  // setup promises
  var deffered = Q.defer();
  // find recipients with a scheduleDate that match today
  Message.find().where('scheduleDate').equals(mailDay).exec(    
    (err, recipient) => {
    var recipients = [];
    // handle error
    if (err) {
      deffered.reject(console.log('failed: ' + err));
    } else {
      // add all qualifying recipients to the recipients array
      for (var i = recipient.length - 1; i >= 0; i--) {        
        recipients.push(recipients[i]);
      }  
      deffered.resolve(recipients);
    }    
  });
  return deffered.promise;
};

// creates an email data for each recipients and bundles them into an array
var mailCreator = recipients => {
  var mailing = [];

  for (var i = recipients.length - 1; i >= 0; i--) {
    // create an object for each email you want sent
    var data = {
        from: "Evergarden Services (we might need an email address here)",
        to: recipients.email,
        subject: "You got a new message on Evergarden!",
        text: recipients.message
      };
      mailing.push(data);
  }
  return mailing;
}

var cronJob = cron.schedule('1 * * * * *', () => {
  console.log('searching for mail once a minute');
});



// function to send user email given template and subject     
var mailSender = (recipientEmail, text) => {
    // setup promises
    var deffered = Q.defer();
    // create new mailgun instance with credentials
    var mailgun = new Mailgun({
      apiKey: mailgun_api, 
      domain: mailgun_domain
    });
    // setup the basic mail data
    var mailData = {
      from: MAILGUN_DOMAIN,
      to: recipientEmail,
      subject:  "You got a new message on Evergarden!",
      text: text
    };
    // send your mailgun instance the mailData
    mailgun.messages().send(mailData, (err, body) => {
      // If err console.log so we can debug
      if (err) {
        deffered.reject(console.log('failed: ' + err));
      } else {        
        deffered.resolve(body)
      }      
    });

    return deffered.promise; 
};

// set mailDay to now
// Note! you will need to format
// the date to match the date
// in your user record
var mailDay = moment().format("MMM Do YYYY");

// call the scheduler, which takes a function
// and pass in our mailing sequence

cronJob(() => {
  // find users with preferences set for now
  mailRecipients(mailDay)
    .then(function (recipients) {
      // create a mailing
      var mailing = mailCreator(recipients);
      // for each mailing item, send an email
      for (var i = mailing.length - 1; i >= 0; i--) {
        // email each user with their custom template
        mailSender(mailing[i].recipientEmail, mailing[i].text)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log("error: " + err)
          })
      }
  })
});

app.listen(3128);