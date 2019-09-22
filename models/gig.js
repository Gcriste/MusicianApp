const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema({
  pay: {type: Number, required: true },
  venue: {type: String, required: true},
  bandname: String,
  musictype: {type: String, trim: true},
  date: { type: Date, default: Date.now }
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;
