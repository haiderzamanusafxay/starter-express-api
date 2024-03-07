const mailjet = require("nodemailer-mailjet-transport");
const nodemailer = require("nodemailer");
const mailjetTransport = mailjet({
  auth: {
    apiKey: "676aa359c00df4579de71e3e8549ead5",
    apiSecret: "197dfa383d2c2ac08449eb205cded856",
  },
});

const transporter = nodemailer.createTransport(mailjetTransport);
module.exports = transporter;
