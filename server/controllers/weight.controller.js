const User = require('../models/auth-model')

module.exports.showWieght = async (req, res) => {
    const candidate = await User.findOne({ login: req.body.login })


}

module.exports.changeWieght = async (req, res) => {
    const candidate = await User.findOne({ login: req.body.login })


}