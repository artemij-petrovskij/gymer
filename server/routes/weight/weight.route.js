const express = require('express')
const router = express.Router()

const { showWieght } = require('../../controllers/weight.controller')
const { changeWieght } = require('../../controllers/weight.controller')

router.post('/show', showWieght)
router.post('/change', changeWieght)

module.exports = router