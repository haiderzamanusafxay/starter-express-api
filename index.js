const express = require("express");
const app = express();
app.all("/", (req, res) => {
  res.send("Got the the req");
});
app.listen(process.env.PORT || 3000);
