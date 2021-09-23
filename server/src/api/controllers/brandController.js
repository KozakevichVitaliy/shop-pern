const { Brand } = require('../../db/models')
const ApiError = require('../error/ApiError')

class BrandController {
  async create(req, res) {
    try {
      const { name } = req.body
      const brand = await Brand.create({ name })

      return res.json(brand)
    } catch (error) {
      next(ApiError.internal(error.message))
    }
  }
  
  async getAll(req, res) {
    try {
      const brands = await Brand.findAll()

      return res.json(brands)
    } catch (error) {
      next(ApiError.internal(error.message))
    }
  }
}

module.exports = new BrandController()