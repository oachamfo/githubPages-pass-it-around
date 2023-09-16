const express = require("express");
const app = express();

//homepage route
app.get("/", function (req, res) {
  res.send(
    "99 Bottles of beer on the wall" +
      `<a href ="/98">take one down, pass it around</a>`
  );
});

//:number_of_bottles route
app.get("/:number_of_bottles", function (req, res) {
  let num = req.params.number_of_bottles - 1;
  res.send(
    "<h1>" +
      req.params.number_of_bottles +
      " Bottles of beer on the wall" +
      `<a href="/${num}">take one down, pass it around</a>` +
      "</h1>"
  );
});

//tell app to listen on port 3000
app.listen(3000, function () {
  console.log("Hi there. The app is listening on port 3000...");
});
