const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const taskRoute = require('./routes/task');
const userRoute = require('./routes/dbAuth');
const authRoute = require('./routes/passportAuth');
const passportSetup = require('./lib/passport');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');

app.use(express.json());

app.use(
  cookieSession({
    name: 'session',
    keys: ['tracker'],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,DELETE,PUT',
    credentials: true,
  })
);

// app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/task', taskRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
