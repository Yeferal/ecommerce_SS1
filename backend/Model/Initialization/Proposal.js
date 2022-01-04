const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Proposal = sequelize.define('Proposal', {
    cuenta_emisora: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    cuenta_receptora: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    tipo_propuesta: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    propuesta_anterior: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Proposal',
        tableName: 'Propuesta',
        timestamps: false
});

module.exports = Proposal;