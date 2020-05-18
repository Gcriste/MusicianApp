const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname:{type:String,required: true},
  lastname:{type:String, required:true},
  password: {type: String, required: true },
  email: {type: String, required: true},
  avatar: {type: String},
},

{ timestamps: {} });

const User = mongoose.model("User", userSchema);

module.exports = User;
