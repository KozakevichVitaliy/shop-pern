const path = require('path')
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const sequelize = require('./db/dbConnection')
const env = require('./env')
const router = require('./api/router')
const associations = require('./db/dbAssociations')
const errorHandler = require('./api/middleware/ErrorHandlerMiddleware')

const PORT = env.app.port || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });

    await sequelize.sync()

    app.listen(PORT, () => console.log(`Server started on port ${env.app.port}`))
  } catch (err) {
    console.log(err);
  }
}

start()