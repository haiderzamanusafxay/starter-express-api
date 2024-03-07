const transporter = require("./mail.js");

const sendEmail = async (to, subject, text) => {
  const data = {
    from: {
      address: "info@bluetelecast.com",
      name: "Bluetelecast",
    },
    to: to,
    subject: subject,
    text: text,
  };
  try {
    console.log("Email sent to " + to);
    return transporter.sendMail(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
