const {Sequelize} = require('sequelize');
const dbconnect = require('../database');

const User = dbconnect.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    lname: {
        type: Sequelize.STRING
    },
    fname: {
        type: Sequelize.STRING
    },
    mname: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.DATE
    },
    contact: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.TINYINT
    },
    typeId: {
        type: Sequelize.INTEGER
    },
    dateCreated: {
        type: Sequelize.DATE
    },
    dateUpdated: {
        type: Sequelize.DATE
    },
    dateDeleted: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
}
);

module.exports = User;