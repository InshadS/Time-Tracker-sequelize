const router = require('express').Router({ mergeParams: true });
const User = require('../models/user');
const utils = require('../lib/utils');
//Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userRegister = await User.create({
      name: name,
      email: email,
      password: await utils.hashPassword(password),
    });
    res.status(201).send(userRegister);
  } catch (error) {
    console.error(error.message);
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
      const validPassword = await utils.comparePassword(
        password,
        userLogin.password
      );
      if (validPassword) {
        res.status(200).json('Valid email and password');
      } else {
        res.status(400).json('Wrong password!');
      }
    } else {
      res.status(404).json('User not found!');
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
