const router = require('express').Router({ mergeParams: true });

router.post('add-task', async (req, res) => {
  try {
    const taskName = req.body.name;

    res.send('Tasks');
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
