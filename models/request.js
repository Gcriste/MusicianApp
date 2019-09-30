const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    firstname:{type:String,required: true},
  lastname: {type: String, required: true },
    age: {type: Number, required: true},
 experience: {type:Number,required:true},
  referencename: {type:String},
  referencenumber: { type:Number},
  link:{type:String},
  gigid:{type:String},
  userid:{type:String}
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;