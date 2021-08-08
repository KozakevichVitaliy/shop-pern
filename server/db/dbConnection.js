const {Sequelize} = require('sequelize')
const dbConfig = require('../config/dbConfig')

module.exports = new Sequelize(dbConfig)