const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Sale = sequelize.define('Sale', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    no_factura: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Sale',
    tableName: 'Venta',
    timestamps: false
});

module.exports = Sale;