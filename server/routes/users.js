const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send({ msg: 'Test route.' });
  });
  module.exports = router;