const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const taskRoute = require('./routes/task');
const userRoute = require('./routes/user');

app.use(express.json());

app.use('/user', userRoute);
app.use('/task', taskRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
