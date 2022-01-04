const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');
const Message = require('./Message');

//Creacion de modelo

const Account = sequelize.define('Account',{
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: false        
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,       
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono: {
        type: DataTypes.BIGINT(10),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    extension: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    verificado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    activa:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
} , {
    sequelize,
    modelName: 'Account',
    tableName: 'Cuenta',
    timestamps: false
});

module.exports = Account;
