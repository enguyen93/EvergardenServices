const mongoose = require("mongoose"),
      cron = require("node-cron"),
      moment = require("moment");
      nodemailer = require("nodemailer")
      express = require("express");


const Recipient = require('../models/Recipient');
const Message = require('../models/Message');
var app = express();


var transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: "evergardenservicesemail@gmail.com",
        pass: "EvergardenAdmin"
    }
})

const findRecipientEmail = (messages) => {
    const mailInformationList = []
    const numberOfMessages = messages.length
    messages.map((message, i) => {
        Recipient.findById(message.recipient)
            .then(recipient => {
                if (numberOfMessages === i + 1) {
                    const mailInfo = {
                        from: "evergardenservicesemail@gmail.com",
                        to: recipient.email,
                        subject: "You have a new message from from Evergarden Services",
                        text: message.message
                    }
                    mailInformationList.push(mailInfo)
                    sendMail(mailInformationList)
                  } else {
                    const mailInfo = {
                        from: "evergardenservicesemail@gmail.com",
                        to: recipient.email,
                        subject: "You have a new message from from Evergarden Services",
                        text: message.message
                    }
                    mailInformationList.push(mailInfo)
                  }
            })
    })
}

const sendMail = (mailInformationList) => {
    mailInformationList.map((mailInformation => {
        transporter.sendMail(mailInformation, function(err, info){
            if (err){
                console.log(err);
            }
        })
    }))
}

const findMailByScheduledDate = () => {
    const today = moment().format('L');
    console.log("Initializing email flow");
    Message.find({ scheduleDate: today })
        .then(messages => {
            findRecipientEmail(messages)
        })
        .catch(err => console.log(err))    
}

cron.schedule('1 * * * * *', () => {
    findMailByScheduledDate()
}) 



// module.exports = Mail = mailSender()
