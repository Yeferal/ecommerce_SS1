const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Promotions = sequelize.define('Promotions', {
    post: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    }
} , {
        sequelize,
        modelName: 'Promotions',
        tableName: 'Promocion',
        timestamps: false
});

module.exports = Promotions;    