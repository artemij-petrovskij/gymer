const express = require('express');
const router = express.Router();
const User = require('../../models/auth-model')

router.post('/login', function (req, res) {
   console.log(req.body)
});

module.exports = router