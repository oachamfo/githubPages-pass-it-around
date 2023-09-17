const express = require("express");
const app = express();

//homepage route
app.get("/", function (req, res) {
  res.send(
    "<h1>" +
      "99 Bottles of beer on the wall" +
      "<br>" +
      `<a style="text-decoration:none;" href ="/98">take one down, pass it around</a>` +
      "</h1>"
  );
});

//:number_of_bottles route
app.get("/:number_of_bottles", function (req, res) {
  let num = req.params.number_of_bottles;

  //if user puts zero, a negative number, or a string
  if (num <= 0 || isNaN(num)) {
    res.send(
      "<h1>" +
        "0 Bottle(s) of beer on the wall" +
        "<br>" +
        `<a target="_self" style="text-decoration:none;" class="link" href="/">start over</a>` +
        "</h1>"
    );
  } else {
    let num = req.params.number_of_bottles - 1;
    res.send(
      "<h1>" +
        req.params.number_of_bottles +
        " Bottle(s) of beer on the wall" +
        "<br>" +
        `<a target="_self" style="text-decoration:none;" class="link" href="/${num}">take one down, pass it around</a>` +
        "</h1>"
    );
  }
});

//tell app to listen on port 3000
app.listen(3000, function () {
  console.log("Hi there. The app is listening on port 3000...");
});
