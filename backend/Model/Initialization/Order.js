const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Order = sequelize.define('Order', {
    id_orden: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_tarjeta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull:false
    },
    entregado: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
}, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orden',
    timestamps: false 
});

module.exports = Order;
