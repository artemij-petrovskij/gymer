const User = require('../models/auth-model')

module.exports.showExercise = async (req, res) => {

    function formattedDate(d = new Date) {
        return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
            .map(n => n < 10 ? `0${n}` : `${n}`).join('.');
    }
    const candidate = await User
        .findOne( { login: 777 } )

            console.log(Object.keys(candidate.training))

            for (var key in candidate.training) {
                console.log(key, ':', candidate.training[key]['date']);
              }
  
    //console.log(candidate.training) login: req.body.user "training.date" : ["27.11.2020"] 
    res.status(201).json(candidate.training);
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
