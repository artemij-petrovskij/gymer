const express = require('express')
const router = express.Router()

const { showWeights, changeWieght } = require('../../controllers/weight.controller')
const { authenticateToken } = require('../../middleware/authenticate')

router.post('/show', authenticateToken, showWeights)
router.post('/change', changeWieght)

module.exports = router