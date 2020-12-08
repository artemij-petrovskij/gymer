const express = require('express')
const router = express.Router()

const { login } = require('../../controllers/auth.controller')
const { signup } = require('../../controllers/auth.controller')
const { authenticateToken } = require('../../middleware/authenticate')

router.post('/signup', signup)
router.post('/login', authenticateToken, login)

module.exports = router