const express = require("express");
const app = express();

const forcast = require("./utils/forcast");

/// ROUTS
app.get("/weather", (req, res) => {
  if (!req.query.search) {
    return res.send("Please provide a city.");
  }
  forcast(req.query.search, (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(response);
  });
});

/// LISTEN TO THE SERVER
app.listen(3000);
