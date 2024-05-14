const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const db = require("../db/store");
router.get("/notes", (req, res) => {
  // get from db.json
  console.log("getting notes");
  fs.readFile(path.join(__dirname, "../db/db.json"),"utf8",(err, data) => {
    res.json(JSON.parse(data));
  });
});

router.post("/notes", (req, res) => {
  let db = fs.readFileSync("db/db.json");
  db = JSON.parse(db);
  res.json(db);
  // creating body for note
  let userNote = {
    title: req.body.title,
    text: req.body.text,
    // creating unique id for each note
    id: uniqid(),
  };
  // pushing created note to be written in the db.json file
  db.push(userNote);
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.json(db);
});

module.exports = router;
