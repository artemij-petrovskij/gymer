const express = require('express')
const router = express.Router()

const { showExercise, addSet } = require('../../controllers/training.controller')

router.post('/trainings', showExercise)
router.post('/set', addSet)
0
module.exports = router