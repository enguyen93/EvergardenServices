const   mongoose = require("mongoose"),
      Recipient = mongoose.model("Recipient"),
      Message = mongoose.model("Message"),
      cron = require("node-cron"),
      moment = require("moment");
      nodemailer = require("nodemailer")

var today = moment().format('L');

var transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: "evergardenservicesemail@gmail.com",
        pass: "EvergardenAdmin"
    }
})

var mailRecipients = (today, mailSetup) => {
    console.log("Searching DB for recipients with messages to go out today");
    messageArr = [];
    Message.find().where("scheduleDate").equals(today).exec(
        (err, message) => {
            if (err) {
                throw (err);
            } else {
                for (var i=0; i < message.length; i++) {
                   messageArr.push(message[i]) 
                }
            }
        }
    )
    console.log(messageArr);
    mailSetup(messageArr);
    
}

var mailSetup = (messageArr, sendThatMail) => {
    var mailing = []
    for (var i = 0; i <= messageArr.length; i++) {
        Recipient.findById(messageArr[i].Recipient, "email", (err,recipientEmail) => {
            if (err) {
                throw (err);
            } else {
                return recipientEmail
            };
        });
        var mailOptions = {
            from: "evergardenservicesemail@gmail.com",
            to: recipientEmail,
            subject: "You have a new message from from Evergarden Services",
            text: messageArr[i].message
        }
        mailing.push(mailOptions)
    }
    console.log(mailing);
    sendThatMail(mailing);
}

var sendThatMail = mailing => {
    for (var i = 0; i<=mailing.length; i++) {
        transporter.sendMail(mailing[i], function(err, info){
            if (err){
                console.log(err);
            } else {
                console.log(info);
            }
        })
    }
}

cron.schedule('1 * * * * *', () => {
    console.log('searching for mail once a minute');
    mailRecipients(today, mailSetup(messageArr, sendThatMail(mailing)
    )
    );
}) 
    

