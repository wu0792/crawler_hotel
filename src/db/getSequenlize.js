const path = require('path')
const Sequelize = require('sequelize')
const dbFilePath = path.join(__dirname, '../..', './src/db/hotel.sqlite')

console.log(`dbpath:${dbFilePath}`)

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // 仅限 SQLite
    storage: dbFilePath,

    // 请参考 Querying - 查询 操作符 章节
    operatorsAliases: false
})

module.exports = sequelize