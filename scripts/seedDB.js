const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/musicianapp"
);

const gigSeed = {
  pay: [300],
  venue: "Tootsies",
  bandname: "Maddie in Good Company",
    musictype: "funk soul rock",
  date: "10/18/2019",
}

db.Gig
  .remove({})
  .then(() => db.Gig.collection.insertMany(gigSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
