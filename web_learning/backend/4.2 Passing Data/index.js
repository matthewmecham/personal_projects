import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var count = 0;

// function nameLength(req, res, next) {
//   count = req.body["fName"].length + req.body["lName"].length;
//   next();
// }

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(nameLength);

app.get("/", (req, res) => {
  res.render('index.ejs')
});

app.post("/submit", (req, res) => {
  count = req.body["fName"].length + req.body["lName"].length;
  res.render('index.ejs', {lenOfName: count});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
