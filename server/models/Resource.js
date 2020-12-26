const {Sequelize} = require('sequelize');
const dbconnect = require('../database');

const Resource = dbconnect.define('resource', {
    title: {
        type: Sequelize.STRING
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    location: {
        type: Sequelize.STRING
    },
    typeId: {
        type: Sequelize.INTEGER
    },
});

module.exports = Resource;