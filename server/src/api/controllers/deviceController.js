const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../../db/models')
const ApiError = require('../error/ApiError')
class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info = '' } = req.body
      const { img } = req.files
      let filename = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', '..', 'static', filename))
      const device = await Device.create({ name, price, brandId, typeId, img: filename })

      if (info) {
        info = JSON.parse(info)
        info.forEach(i => 
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          }))
      }

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
    const { id } = req.params
    try {
      const device = await Device.findOne(
        {
          where: {id} ,
          include: [{ model: DeviceInfo, as: 'info' }]
        }
      )
      
      return res.json(device)
    } catch (error) {
      next(ApiError.internal(error.message))
    }

  }
}

module.exports = new DeviceController()