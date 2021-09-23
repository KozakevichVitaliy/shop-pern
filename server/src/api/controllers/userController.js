const bcrypt = require('bcrypt')
const ApiError = require("../error/ApiError")
const { User, Basket } = require('../../db/models')
const { generateJwt } = require('../../utils/generateJwt')



class UserController {
  async signup(req, res, next) {
    const { email, password, role } = req.body
    if (!email && !password) {
      return next(ApiError.badRequest('Incorrect credential data!'))
    }

    try {
      const candidate = await User.findOne({  where: { email } })
      if (candidate) {
        return next(ApiError.badRequest('User already exists!'))
      }

      const hashPassword = await bcrypt.hash(password, 5)
      const user = await User.create({ email, role, password: hashPassword })
      const basket = await Basket.create({ userId: user.id })

      const token = generateJwt(user.id, user.email, role)
      return res.json({ token })
    } catch (error) {
      next(ApiError.internal(error.message))
    }
  }
  async signin(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne( { where: { email } } )

      if (!user) {
        return next(ApiError.badRequest('User is not exist!'))
      }

      let comparePassword = bcrypt.compareSync(password, user.password)
      if (!comparePassword) {
        return next(ApiError.badRequest('Password doesn\'t match!'))
      }
      const token = generateJwt(user.id, user.email, user.role)
      
      return res.json({ token })
    } catch (error) {
      next(ApiError.internal(error.message))
    }
  }

  async auth(req, res, next) {
    const token = generateJwt(req.user.id, req.user.id, req.user.role)
    return res.json({ token })
  }
}

module.exports = new UserController()