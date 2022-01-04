const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo 

const Tag = sequelize.define('Tag', {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    }
} , {
        sequelize,
        modelName: 'Tag',
        tableName: 'Etiqueta',
        timestamps: false
});

module.exports = Tag;