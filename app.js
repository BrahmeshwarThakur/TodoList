const express = require("express");
const bodyParser = require("body-parser");
const date =require(__dirname +"/date.js");


const app = express();
var items = ["Wake up", "Freshen Up", "Start Grinding Dude"];
let workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extenden: true
}));

app.use(express.static("public"));
app.get("/", function(req, res) {

let day=date()

  res.render("list", {
    ListTitle: day,
    newListItems: items
  });

});



app.post("/", function(req, res) {
  ;
  var item = req.body.newItem;
  if (req.body.list == "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
})
app.get("/work", function(req, res) {
  res.render("list", {
    ListTitle: "Work List",
    newListItems: workItems
  });
})
app.get("/about", function(req,res){
  res.render("about")
})

app.listen(3000, function() {
  console.log("server is started on port 3000")

})
