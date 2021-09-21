const Router = require('express')
const router = new Router()

const userRoutes = require('./userRoutes')
const deviceRoutes = require('./deviceRoutes')
const brandRoutes = require('./brandRoutes')
const typeRoutes = require('./typeRoutes')

router.use('/user', userRoutes)
router.use('/device', deviceRoutes)
router.use('/type', typeRoutes)
router.use('/brand', brandRoutes)

module.exports = router