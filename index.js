const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const taskRoute = require('./routes/task');

app.use(express.json());
app.use('/task', taskRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
