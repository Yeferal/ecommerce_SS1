const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
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
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'Usuario',
    timestamps: false
});

module.exports = User;