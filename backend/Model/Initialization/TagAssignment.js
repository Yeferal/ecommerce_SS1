const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const AssignTag = sequelize.define('AssignTag', {
    id_etiqueta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
        sequelize,
        modelName: 'AssignTag',
        tableName: 'Asignacion_etiqueta',
        timestamps: false
});

module.exports = AssignTag;