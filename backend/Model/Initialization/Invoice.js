const { Model, DataTypes} = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Invoice = sequelize.define('Invoice', {
    no_factura: {
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    cuenta_efectiva: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    divisa: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Invoice',
        tableName: 'Factura',
        timestamps: false
});

module.exports = Invoice;