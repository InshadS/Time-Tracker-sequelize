const router = require('express').Router({ mergeParams: true });
const Task = require('../models/task');

router.post('/add-task', async (req, res) => {
  try {
    const taskName = req.body.name;

    const addTask = await Task.create({
      name: taskName,
    });
    res.status(200).send(addTask);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
