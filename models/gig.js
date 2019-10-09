const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema({
  musician:{type:String,required: true},
  pay: {type: Number, required: true },
  venue: {type: String, required: true},
  bandname: String,
  musictype: {type: String, required:true},
  date: { type: Date, required:true },
  starttime:{type:String, required:true },
  endtime:{type:String, required:true },
  userid:{type:String},
  request:{type:String}
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;
