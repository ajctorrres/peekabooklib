const { Sequelize } = require('sequelize');

module.exports = new Sequelize('peekabookf', 'root', '', {
    host:'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});



