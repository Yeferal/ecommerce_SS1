const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Wallet = sequelize.define('Wallet', {
    cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    divisa: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Wallet',
        tableName: 'Cartera',
        timestamps: false
});

module.exports = Wallet;