const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Notifications = sequelize.define('Notifications', {
    usuario_recibe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario_envia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    leido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
} , {
        sequelize,
         modelName: 'Notifications',
         tableName: 'Notificacion',
         timestamps: false
});

module.exports = Notifications;