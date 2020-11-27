const User = require('../models/auth-model')

module.exports.showExercise = async (req, res) => {
    console.log(req.body)
    function formattedDate(d = new Date) {
        return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
            .map(n => n < 10 ? `0${n}` : `${n}`).join('.');
    }
    const candidate = await User.findOne({ login: req.body.user})
    // date: formattedDate()
    console.log(candidate.training)
    res.status(201).send(candidate.training);
}

module.exports.addSet = async (req, res) => {
    console.log(req.body)

    function formattedDate(d = new Date) {
        return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
            .map(n => n < 10 ? `0${n}` : `${n}`).join('.');
    }
    const candidate = await User.findOne({ login: req.body.user })

    await candidate.training.push({
        date: formattedDate(),
        set: req.body.set,
        exercise: req.body.exercise,
        weight: req.body.weight,
        repeats: req.body.repeats
    })
    await candidate.save()

    res.status(201).send(candidate.training);
}
