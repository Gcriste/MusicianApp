// module.exports = function(app) {
// 	const db = require('../../models');
// 	const passport = require('passport');
// 	const bcrypt = require('bcryptjs');
// 	const jwt = require('jsonwebtoken');
// 	const keys = require('../../config/keys');

// 	// @route GET api/users/test
// 	// @desc tests an authenticated route
// 	app.get('/api/', passport.authenticate('jwt', { session: false }), (req, res) => {
// 		res.json({
// 			msg: 'Route was successfully authenticated.'
// 		});
// 	});

// 	// @route POST api/users/login
// 	// @desc logs in a user
// 	app.post('/api/user/login', (req, res) => {
// 		const email = req.body.email;
// 		const password = req.body.password;

// 		// Find user by email
// 		db.User
// 			.findOne({
// 				where: { email }
// 			})
// 			.then((user) => {
// 				// Check the user exists
// 				if (!user) {
// 					return res.status(404).json({ msg: 'User not found.' });
// 				}

// 				let currentUser = user.get();

// 				// Check the password
// 				bcrypt.compare(password, currentUser.password).then((isMatch) => {
// 					if (isMatch) {
// 						db.User
// 							.findOne({
// 								where: {
// 									id: user.id
// 								},
// 								// include: [ { model: db.Transaction }, { model: db.Category } ]
// 							})
// 							.then((user) => {
// 								// create the payload
// 								const payload = {
//                                     id: user.id,
//                                     email:user.email,
// 									firstName: user.firstName,
// 									lastName: user.lastName
// 								};

// 								// sign the token
// 								jwt.sign(
// 									payload,
// 									keys.secretOrKey,
// 									{
// 										expiresIn: 3600 * 12
// 									},
// 									(err, token) => {
// 										res.json({
// 											...payload,
// 											success: true,
// 											token: `Bearer ${token}`
// 										});
// 									}
// 								);
// 							})
// 							.catch((err) => console.log(err));
// 					} else {
// 						return res.status(400).json({ password: 'User password could not be validated.' });
// 					}
// 				});
// 			});
// 	});

// 	// @route GET api/users
// 	// @desc gets a user by id
// 	app.get('/api/users', passport.authenticate('jwt', { session: false }), (req, res) => {
// 		db.User
// 			.findOne({
// 				where: {
// 					id: req.body.id
// 				}
// 			})
// 			.then((user) => {
// 				res.json({
// 					id: user.id,
// 					firstName: user.firstName,
// 					lastName: user.lastName,
// 					email: user.email
// 				});
// 			});
// 	});
// };