const bcrypt = require('bcrypt');

//Hash password

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

// Compare password

const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports.hashPassword = hashPassword;
module.exports.comparePassword = comparePassword;
