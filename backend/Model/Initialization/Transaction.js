const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Transaction = sequelize.define('Transaction', {
    no_transaccion: {
        type: DataTypes.BIGINT(15),
        primaryKey: true,
        autoIncrement: true
    },
    cuenta_emisora: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cuenta_receptora: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valisa: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Transaction',
        tableName: 'Transaccion',
        timestamps: false
});

module.exports = Transaction;