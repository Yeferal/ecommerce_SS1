const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Comment = sequelize.define('Comment', {
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cuenta_emisora: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE
    }
} , { 
        sequelize,
        modelName: 'Comment',
        tableName: 'Comentario',
        timestamps: false
});

module.exports = Comment;