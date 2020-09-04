var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/user');
var passport = require('passport');

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;
module.exports = passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('jwt payload',jwt_payload)
    User.find({email: jwt_payload.email}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            console.log('user',user);
            return done(null, user);
        }
    });
}));