const express = require('express');
const app = express();
const sequelize = require('./models/index');
const PORT = 5000;

//Test DB
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
