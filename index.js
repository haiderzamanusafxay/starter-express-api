const express = require("express");
const app = express();
const sendEmail = require("./sendMail.js");

app.all("/sendMail", (req, res) => {
  const { subject, to, body } = req.body;
  sendEmail(
    "haiderzamanyzi@gmail.com",
    "Bluetelecast",
    "This is a sample response from bluetelecast."
  );
  res.status(200).json("got the respose");
});
app.listen(process.env.PORT || 3000);
