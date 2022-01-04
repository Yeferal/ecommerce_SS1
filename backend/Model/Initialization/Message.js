const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Message = sequelize.define('Message', {
    id_conversacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mensaje: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cuenta_emisora:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cuenta_receptora: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
        sequelize,
        modelName: 'Message',
        tableName: 'Mensaje',
        timestamps: false
});

module.exports = Message;