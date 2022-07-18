const express = require('express');
const app = express();
const sequelize = require('./models/index');
const PORT = process.env.PORT || 5000;
const taskRoute = require('./routes/task');

//Test DB
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.use('task', taskRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
