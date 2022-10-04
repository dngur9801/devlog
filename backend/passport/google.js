const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models');
const dotenv = require('dotenv');

dotenv.config();

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('google profile : ', profile);
        try {
          const exUser = await User.findOne({
            where: { email: profile?.emails[0].value, provider: 'google' },
          });

          console.log('exUser : ', exUser);
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = await User.create({
              email: profile?.emails[0].value,
              provider: 'google',
            });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
