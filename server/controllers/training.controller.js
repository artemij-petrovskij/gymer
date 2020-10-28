const User = require('../models/auth-model')

module.exports.showExercise = async (req, res) => {
    console.log(req.body)
    const candidate = await User.findOne({ login: req.body.user })
    res.status(201).send(candidate.training);
}

module.exports.addSet = async (req, res) => {
    console.log(req.body)
    const candidate = await User.findOneAndUpdate({ login: req.body.user })
    
    await candidate.training.push({
        date: Date(),
        set: req.body.set,
        exercise:req.body.exercise,
        weight: req.body.weight,
        repeats: req.body.repeats
    })
    await candidate.save()
    
    res.status(201).send(candidate.training);
}
