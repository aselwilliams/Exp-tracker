const {DataTypes} = require('sequelize');

const {sequelize} = require('../util/db');

module.exports = {
    User: sequelize.define('user', {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        hashedPass: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        image: DataTypes.STRING
    })
}