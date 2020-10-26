const express = require('express')
const router = express.Router()

const { showWeights, changeWieght } = require('../../controllers/weight.controller')

router.post('/show', showWeights)
router.post('/change', changeWieght)

module.exports = router