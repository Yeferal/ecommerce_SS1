const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion de modelo
const StandardAccount = sequelize.define('StandardAccount', {
    id_cuenta: {
        type: DataTypes.INTEGER(13),
        allowNull: false,
        primaryKey:true,
        autoIncrement: false        
    },
    cuenta_general: {
        type: DataTypes.INTEGER(13),
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
} , {    
    sequelize,
    modelName: 'StandardAccount',
    tableName: 'Cuenta_estandar',
    timestamps: false
});

module.exports = StandardAccount;