const express = require('express')
const router = express.Router()

const { authenticateToken } = require('../../middleware/authenticate')
const { showExercise, addSet, maxSet } = require('../../controllers/training.controller')

router.post('/trainings', authenticateToken, showExercise)
router.post('/set', authenticateToken, addSet)
router.post('/maxset', authenticateToken, maxSet)

module.exports = router