const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let items = ["DSA for 2 hours","Web D for 4 hours","CS fundamentals for 2 hours", "Meditation"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));



app.get("/", function(req, res) {

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let today = new Date();





  let day = (today.toLocaleDateString("en-US", options));

  res.render('list', {
    dayname: day,
    newitems: items
  });


});

app.post("/", function(req, res) {

  let newitem = req.body.item;
  //console.log(req.body.item);
  items.push(newitem);

  res.redirect("/");

});


app.listen(3000, function() {

  console.log("Server started on port 3000");
})
