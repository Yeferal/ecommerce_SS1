const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Bill = sequelize.define('Bill', {
    no_factura : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cuenta_efectiva: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Bill',
    tableName: 'Factura',
    timestamps: false
});

module.exports = Bill;