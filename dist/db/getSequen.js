var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // 仅限 SQLite
    storage: 'C:\\Src\\hello_sequelize\\src\\db\\ad.sqlite',
    // C:\Src\hello_sequelize\src\db\ad.sqlite
    // 请参考 Querying - 查询 操作符 章节
    operatorsAliases: false
});
module.exports = sequelize;
//# sourceMappingURL=getSequen.js.map