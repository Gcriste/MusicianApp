const db = require("../models");

// Defining methods for the GigsController
module.exports = {

  findById: function(req,res){
    db.Discussion
    .find({userid:req.params.userid})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  findAll: function(req, res) {
    db.Discussion
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
    db.Discussion
      .findById({_id:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Discussion
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Discussion
    .findOneAndUpdate({userid: req.params.userid },  {$set: {comments:req.body}}, { new: true, upsert: true })
    .then(()=>{
      db.Discussion.findOne({userid:req.params.userid})
      .then(comment =>{
        res.status(200).json(comment)
      })
    }
      
    )
    .catch(err => res.status(422).json(err));
},
  remove: function(req, res) {
    db.Discussion
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
};
