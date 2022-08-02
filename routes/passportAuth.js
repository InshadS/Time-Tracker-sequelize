const router = require('express').Router({ mergeParams: true });
const passport = require('passport');
const CLIENT_URL = process.env.CLIENT_URL;
const CLIENT_LOGIN_URL = process.env.CLIENT_LOGIN_URL;

router.get('/login/success', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'successfull',
    user: req.user,
  });
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_LOGIN_URL);
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

module.exports = router;
