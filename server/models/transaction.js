const {DataTypes} = require('sequelize');

const {sequelize} = require('../util/db');

module.exports = {
    Transaction: sequelize.define('transaction', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true  
        },
        title: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        createAt: DataTypes.DATE,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        type: DataTypes.STRING,

    })
}