const User = require('../models/auth-model')

module.exports.showWeights = async (req, res) => {
    console.log(req.body)
    const candidate = await User.findOne({ login: req.body.user })
    res.status(201).send(candidate.weight);
}

module.exports.changeWieght = async (req, res) => {
    const candidate = await User.findOne({ login: req.body.user })
    const date = new Date();
    let day = date.getDay()
    let year = date.getFullYear()
    let month = date.getMonth()

    await candidate.weight.push({
        date:new  Date(year, month, day),
        weight: req.body.weight
    })
    await candidate.save()
    res.status(201).send(candidate.weight);
}