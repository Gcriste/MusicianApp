const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    // user: {type: Schema.Types.ObjectId, ref: 'Users'},
    text: {type: String,required: true},
    name: {type: String},
    avatar: {type: String},
    likes: [{
        userid: {type:String}
    }],
    comments: [{
        userid: {type: String},
        text: {
            type: String
        },
        name: {
            type: String,
        },
        avatar: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {type: Date, default: Date.now},
    userid:{type:String}
});
 

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;