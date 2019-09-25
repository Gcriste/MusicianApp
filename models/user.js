const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
//   id:{type:Number},
  firstname:{type:String,required: true},
  lastname:{type:String, required:true},
  password: {type: String, required: true },
  email: {type: String, required: true},
  gigId:{type: Number}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
