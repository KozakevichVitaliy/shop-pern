const bcrypt = require('bcrypt')
const ApiError = require("../error/ApiError")
const { User, Basket } = require('../../db/models')

class UserController {
  async signup(req, res, next) {
    const { email, password } = req.body
    if (!email && !password) {
      return next(ApiError.badRequest('Incorrect credential data!'))
    }

    const candidate = await User.findOne({  where: {email}})
    if (candidate) {
      return next(ApiError.badRequest('Use already exists!'))
    }

    const hashPassword = bcrypt.hash(password, 5)
    const user = await User.create({ email, role, password })
    const basket = await Basket.create({ userId: user.id })
  }
  async signin() {
    
  }

  async auth(req, res) {
    res.json({ hello: 'sadsa' })
  }
}

module.exports = new UserController()