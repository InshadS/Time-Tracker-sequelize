const router = require('express').Router({ mergeParams: true });
const User = require('../models/user');
const bcrypt = require('bcrypt');

//Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);
    const userRegister = await User.create({
      name: name,
      email: email,
      password: hash,
    });
    res.status(201).send(userRegister);
  } catch (error) {
    console.error(error.message);
    res.status(500).json('User exists!');
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const userLogin = await User.findOne({
      where: {
        email: email,
      },
    });
    if (userLogin) {
      const validPassword = await bcrypt.compare(password, userLogin.password);
      if (validPassword) {
        res.status(200).json('Valid email and password');
      } else {
        res.json('Wrong password!');
      }
    } else {
      res.status(404).json('User not found!');
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
