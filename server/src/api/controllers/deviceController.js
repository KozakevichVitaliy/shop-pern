const uuid = require('uuid')
const path = require('path')
const { Device } = require('../../db/models')
const ApiError = require('../error/ApiError')
class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info = '' } = req.body
      const { img } = req.files
      let filename = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', '..', 'static', filename))

      const device = await Device.create({ name, price, brandId, typeId, img: filename })

      return res.json(device)
    } catch (error) {
      next(ApiError.internal(error.message))
    }
  }
  async getAll(req, res) {
    const { brandId, typeId, limit = 9, page = 1 } = req.query
    const offset = page * limit - limit 
    let devices

    try {
      if (!brandId && !typeId) {
        devices = await Device.findAndCountAll({ limit, offset })
      }
      if (brandId && !typeId) {
        devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
      }
      if (!brandId && typeId) {
        devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
      }
      if (brandId && typeId) {
        devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })
      }
  
      return res.json(devices)
    } catch (error) {
      
    }
  }
  async getOne(req, res) {
    
  }
}

module.exports = new DeviceController()