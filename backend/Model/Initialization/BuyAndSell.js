const { Model, DataTypes} = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const BuySell = sequelize.define('BuySell', {
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    divisa: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    no_factura: {
        type: DataTypes.BIGINT(15),
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'BuySell',
        tableName: 'Compra_venta',
        timestamps: false
});

module.exports = BuySell;