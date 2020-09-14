const express = require('express');
const router = express.Router();

const { login } = require('../../controllers/auth.controller')

router.get('/', (req, res) => {
    res.json({ message: 'yeap' })
});


router.post('/login', login);


module.exports = router