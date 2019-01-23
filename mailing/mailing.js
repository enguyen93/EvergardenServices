'use strict';

// require your mailgun package
// Adding your key and domain to environment variables
// is important as you don’t want these values 
// in your source control or otherwise exposed.
// process.env is an easy way to access your env variables
var   mongoose = require('mongoose'),
      User = mongoose.model('User'),
      mailgun_api = process.env.MAILGUN_APIKEY,
      mailgun_domain = process.env.MAILGUN_DOMAIN,
      Mailgun = require('mailgun-js'),
      schedule = require('node-schedule'),
      Q = require('q'),
      moment = require('moment'),
      
      

// find users that match criteria
var mailRecipients = function (mailDay) {
  console.log('users fired');
  // setup promises
  var deffered = Q.defer();
  // find recipients with a scheduleDate that match today
  Recipient.find().where('scheduleDate').equals(moment().format("MMM Do YY")).exec(    
    function(err, recipient){
    var recipients = [];
    // handle error
    if (err) {
      deffered.reject(console.log('failed: ' + err));
    } else {
      // add all qualifying recipients to the recipients array
      for (var i = recipient.length - 1; i >= 0; i--) {        
        recipients.push(recipients[i]);
      }  
      deffered.resolve(recipeints);
    }    
  });
  return deffered.promise;
};

// creates an email data for each recipients and bundles them into an array
var mailCreator = function(recipients) {
  var mailing = [];

  for (var i = recipients.length - 1; i >= 0; i--) {
    // create an object for each email you want sent
    var data = {
        from: "Evergarden Services",
        to: recipients.email,
        subject: "You got a new message on Evergarden!",
        text: recipients.message
      };
      mailing.push(data);
  }
  return mailing;
}

var mailScheduler = function (job) {
  // set rules for scheduler. Every day, 8AM 
  var rule = new schedule.RecurrenceRule();
      rule.dayOfWeek = [new schedule.Range(0, 6)];
      rule.hour = 8;
      rule.minute = 00;
  schedule.scheduleJob(rule, job);
};

// function to send user email given template and subject     
var mailSender = function (recipientEmail, subject, text) {
    // setup promises
    var deffered = Q.defer();
    // create new mailgun instance with credentials
    var mailgun = new Mailgun({
      apiKey: mailgun_api, 
      domain: mailgun_domain
    });
    // setup the basic mail data
    var mailData = {
      from: 'Evergarden Services',
      to: recipientEmail,
      subject:  "You got a new message on Evergarden!",
      text: text
    };
    // send your mailgun instance the mailData
    mailgun.messages().send(mailData, function (err, body) {
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
var mailDay = new Date();

// call the scheduler, which takes a function
// and pass in our mailing sequence
mailScheduler(function () {
  // find users with preferences set for now
  mailRecipients(mailDay)
    .then(function (recipients) {
      // create a mailing
      var mailing = mailCreator(recipients);
      // for each mailing item, send an email
      for (var i = mailing.length - 1; i >= 0; i--) {
        // email each user with their custom template
        mailSender(mailing[i].recipientEmail,'You got a new message on Evergarden!', mailing[i].text)
          .then(function (res) {
            console.log(res);
          })
          .catch(function (err) {
            console.log("error: " + err)
          })
      }
  })
});