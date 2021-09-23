const { Type } = require('../../db/models')
const ApiError = require('../error/ApiError')
class TypeController {
  async create(req, res) {
    try {
      const { name } = req.body
      const type = await Type.create({ name })

      return res.json(type)
    } catch (error) {
      next(ApiError.internal(error.message))
    }
  }
  
  async getAll(req, res) {
    try {
      const types = await Type.findAll()

      return res.json(types)
    } catch (error) {
      next(ApiError.internal(error.message))
    }
  }
}

module.exports = new TypeController()