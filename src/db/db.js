const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('data_base_test', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})


module.exports = sequelize;