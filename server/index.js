const express = require('express')
const sequelize = require('./db/dbConnection')
const env = require('./env')

const PORT = env.app.port || 5000

const app = express()

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