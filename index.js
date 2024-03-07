const express = require("express");
const app = express();

app.all("/sendMail", (req, res) => {
  const { name, email, body } = req.body;
  res.status(200).json("got the respose");
});
app.listen(process.env.PORT || 3000);
