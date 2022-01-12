const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

//Creacion del modelo 

const Token = sequelize.define('Token', {
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_actualizado: {
        type:DataTypes.DATE,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Token',
        tableName: 'Token_verificacion',
        timestamps: false
});

module.exports = Token;