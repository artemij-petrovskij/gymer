const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

const User = require('../models/auth-model')

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({ login: req.body.login })

    if (candidate) {
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)

        if (isPasswordCorrect) {
            console.log(req.body)


            jwt.sign({
                login: candidate.login,
                password: candidate._id
            }, 'secret', (err, token) => {
                res.json({ token })

            })


        } else {
            res.status(404).json({ message: 'Пользователь не найден 1' })
        }

    } else {
        res.status(404).json({ message: 'Пользователь не найден 2' })
    }
}

module.exports.signup = async (req, res) => {
    const candidate = await User.findOne({ login: req.body.login })
    if (candidate) {
        res.status(409).json({ message: 'Пользователь с таким логином уже существует' })
    } else {
        const salt = bcrypt.genSaltSync(10)

        const user = new User({
            login: req.body.login,
            password: bcrypt.hashSync(req.body.password, salt)
        })

        await user.save()
        res.status(201).json(user)
    }
}