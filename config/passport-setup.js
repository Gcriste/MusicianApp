// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');
// const keys = require('./keys')
// const User = require("../models/user")

// passport.use(
//     new GoogleStrategy({
//         callbackURL:'auth/google/redirect',
//         clientID:keys.google.clientID,
//         clientSecret:keys.google.clientSecret
//     },(accessToken, refreshToken, profile, done)=>{
//         console.log("passport callback function fired")
//         console.log(profile)
//     })
// )