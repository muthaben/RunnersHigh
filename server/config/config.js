require('dotenv').config()

module.exports = {
  development: {
    username: 'root',
    password: '12081208',
    database: 'runnershigh',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'runnershigh',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'runnershigh',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql'
  }
}
