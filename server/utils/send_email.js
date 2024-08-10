"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

async function sendMail({ subject, receivers, text, htmlBody, files }) {
  const options = {
    from: {
      name: "Hello World",
      address: process.env.EMAIL,
    },
    to: receivers,
    subject: subject,
    text: text,
    html: htmlBody,
    attachments: files,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail.com",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail(options);
  console.log("Message sent: %s", info.messageId);
}

module.exports.sendMail = sendMail;
