const express = require('express');

const router = express.Router();

router.use('/api', require('./api'));

router.get('/', (req, res) => {
  res.status(200);
  res.send('Hello Page');
});

module.exports = router;
