const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

const ListOrder = sequelize.define('ListOrder', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_orden: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sub_total: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'ListOrder',
    tableName: 'Lista_Orden',
    timestamps: false
});

module.exports = ListOrder;
