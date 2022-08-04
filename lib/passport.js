const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const User = require('../models/passportuser');

// Google Authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({
          where: {
            id: profile.id,
          },
        });

        if (user) {
          done(null, user);
        } else {
          const newUser = await User.create({
            id: profile.id,
            name: profile.displayName,
            avatar: profile.photos[0].value,
          });
          done(null, newUser);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  )
);

// GitHub Authentication
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({
          where: {
            id: profile.id,
          },
        });

        if (user) {
          done(null, user);
        } else {
          const newUser = await User.create({
            id: profile.id,
            name: profile.displayName,
            avatar: profile.photos[0].value,
          });
          done(null, newUser);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
