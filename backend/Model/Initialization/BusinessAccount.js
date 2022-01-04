const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion de modelo
const BusinessAccount = sequelize.define('BusinessAccount',{
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: false        
    },
    cuenta_general: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    empresa: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    mision: {
        type: DataTypes.TEXT
    },
    vision: {
        type: DataTypes.TEXT
    },
    descripcion: {
        type: DataTypes.TEXT
    }
} , {
        sequelize,
        modelName: 'BusinessAccount',
        tableName: 'Cuenta_empresarial',
        timestamps: false

});

module.exports = BusinessAccount;