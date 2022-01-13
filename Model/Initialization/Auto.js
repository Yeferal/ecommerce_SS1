const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

//Creacion del modelo 

const Auto = sequelize.define('Auto', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    auto: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
} , {
        sequelize,
        modelName: 'Auto',
        tableName: 'Auto',
        timestamps: false
});

module.exports = Auto;