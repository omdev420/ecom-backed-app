const express = require('express');

const router = express.Router();

router.get('/all', (req, res) => {
  res.status(200).json({ Hello: 'World' });
});

module.exports = router;
