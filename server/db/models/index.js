const sequelize = require('../dbConnection')
const {DataTypes} = require('sequelize')

const User = require('./user')(sequelize, DataTypes)
const Basket = require('./basket')(sequelize, DataTypes)
const BasketDevice = require('./basketDevice')(sequelize, DataTypes)
const Brand = require('./brand')(sequelize, DataTypes)
const Device = require('./device')(sequelize, DataTypes)
const DeviceInfo = require('./deviceInfo')(sequelize, DataTypes)
const Rating = require('./rating')(sequelize, DataTypes)
const Type = require('./type')(sequelize, DataTypes)
const TypeBrand = require('./typeBrand')(sequelize, DataTypes)

module.exports = {
  User,
  Basket,
  BasketDevice,
  Brand,
  Device,
  DeviceInfo,
  Rating,
  Type,
  TypeBrand
}

