const db = require("../models");
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");


// Defining methods for the UserController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const {email, password, firstname, lastname} = req.body;
    db.User
    .findOne({email})
    .then((user) => {
      if (user) {
        return res.status(400).json({ email: 'This email already exists.' });
      } else {
        const newUser = {
          firstname,
          lastname,
          email,
          password
        };

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;

            db.User
              .create(newUser)
              .then((user) => {
                res.status(200).json({
                  message: 'User account successfully created.',
                  userCreated: true
                });
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  },
 
  update: function(req, res) {
    console.log(req.user)
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login:function (req,res){
    const {email, password} = req.body;
    db.User
    .findOne({email})
    .then(user => {
      if(!user){
        return res.status(404).json({user: "User not found"})
      }
     
      
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch){
          db.User.findById(user._id)
          .then(user => {

            const payload = {
              id:user._id,
              email:user.email,
              firstname:user.firstname,
              lastname:user.lastname
            }
            jwt.sign(
              payload,
              keys.secretOrKey,
              {expiresIn: 3600 * 12},
              (err, token) => {
                res.json({
                  ...payload,
                  success:true,
                  token: `Bearer ${token}`
                })
              }
            )
          })
          .catch(err => console.log(error))
        }
        else{
          return res.status(400).json({
            password:"User password could not be validated"
          })
        }
      })
    

    })
  }
};
