const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Account = sequelize.define('Account', {
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
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
    password: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    verificado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    activa: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
}, {
    sequelize,
    modelName: 'Account',
    tableName: 'Cuenta',
    timestamps: false 
});

module.exports = Account;
