const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema({
  musician:{type:String,required: true},
  pay: {type: Number, required: true },
  venue: {type: String, required: true},
  bandname: String,
  musictype: {type: String, trim: true},
  date: { type: Date, required:true },
  time:{type:String, required:true },
  userid:{type:String},
  request:{type:String}
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;
