const express = require('express')
const router = express.Router()

const { showWieght, changeWieght } = require('../../controllers/weight.controller')

router.post('/show', showWieght)
router.post('/change', changeWieght)

module.exports = router