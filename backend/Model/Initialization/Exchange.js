const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Exchange = sequelize.define('Exchange', {
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_propuesta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
} , {
        sequelize,
        modelName: 'Exchange',
        tableName: 'Intercambio',
        timestamps: false
});

module.exports = Exchange;