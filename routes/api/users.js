const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport");
const bcrypt = require("bcryptjs")


router
   .route("/")
  .get(passport.authenticate('jwt', {session:false}), usersController.findAll)
  .post(usersController.create)
  .put(passport.authenticate('jwt', {session:false}), usersController.update);

  router
  .route("/test")
  .get(passport.authenticate('jwt', {session:false}), usersController.test)

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(passport.authenticate('jwt', {session:false}), usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  router
  .route("/login")
  .post(usersController.login)



module.exports = router;


// module.exports = function(app) {
//   const router = require("express").Router();
//   const usersController = require("../../controllers/usersController");
// 	const bcrypt = require('bcryptjs');
// 	const db = require('../../models');
//   const passport = require('passport');
//   const jwt = require("jsonwebtoken");
//   const keys = require("../../config/keys")



// 	// 
// 	app.post('/api/users', function (req, res) {
// 		db.User
// 			.findOne({
// 				where: {
// 					email: req.body.email
// 				}
// 			})
// 			.then((user) => {
// 				if (user) {
// 					return res.status(400).json({ email: 'This email already exists.' });
// 				} else {
// 					const newUser = {
// 						firstname: req.body.firstname,
// 						lastname: req.body.lastname,
// 						email: req.body.email,
// 						password: req.body.password
// 					};

// 					bcrypt.genSalt(10, (err, salt) => {
// 						bcrypt.hash(newUser.password, salt, (err, hash) => {
// 							if (err) throw err;
// 							newUser.password = hash;

// 							db.User
// 								.create(newUser)
// 								.then((user) => {
// 									res.status(200).json({
// 										message: 'User account successfully created.',
// 										userCreated: true
// 									});
// 								})
// 								.catch((err) => console.log(err));
// 						});
// 					});
// 				}
// 			});
// 	});

// 	// @route GET /api/users
// 	// @desc get a user by id
// 	app.get('/api/user/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
//     db.User
//     .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
// 	});


//   app.get('/api/users', passport.authenticate('jwt', { session: false }), (req, res) => {
//     db.User
//     .find({})
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
// 	});
	
// 	app.delete('/api/users', passport.authenticate('jwt', { session: false }), (req, res) => {
// 		db.Category
// 			.destroy({
// 				where: {
// 					UserId: req.user.id
// 				}
// 			})
// 			.then(() => {
// 				db.User
// 					.destroy({
// 						where: {
// 							id: req.user.id
// 						}
// 					})
// 					.then(() => {
// 						res.status(200).json({
// 							msg: 'User was successfully deleted.',
// 							success: true
// 						});
// 					})
// 					.catch((err) => {
// 						console.log(err);
// 					});
// 			});
// 	});


// 	app.put('/api/users/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
// 		db.User
// 			.findOne({
// 				where: {
// 					id: req.params.id
// 				}
// 			})
// 			.then((user) => {
// 				console.log(user);
// 				if (!user) {
// 					return res.status(400).json({ user: 'A user with this ID could not be found.' });
// 				} else {
// 					const updatedUser = {
// 						firstName: req.body.firstName,
// 						lastName: req.body.lastName,
// 						email: req.body.email
// 					};

// 					user
// 						.update(updatedUser)
// 						.then((user) => {
// 							res.status(200).json({
// 								user,
// 								success: {
// 									profile: 'Your user profile has been successfully updated!'
// 								}
// 							});
// 						})
// 						.catch((err) => console.log(err));
// 				}
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	});

// 	app.put('/api/users/password/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
// 		db.User
// 			.findOne({
// 				where: {
// 					id: req.params.id
// 				}
// 			})
// 			.then((user) => {
// 				if (!user) {
// 					return res.status(400).json({ user: 'A user with this ID could not be found.' });
// 				} else {
// 					const updatedUser = {
// 						password: req.body.password
// 					};

// 					bcrypt.genSalt(10, (err, salt) => {
// 						bcrypt.hash(updatedUser.password, salt, (err, hash) => {
// 							if (err) throw err;
// 							updatedUser.password = hash;

// 							user
// 								.update(updatedUser)
// 								.then((user) => {
// 									res.status(200).json({
// 										user,
// 										success: {
// 											password: 'Your password has been successfully updated!'
// 										}
// 									});
// 								})
// 								.catch((err) => console.log(err));
// 						});
// 					});
// 				}
// 			});
// 	});
// };



