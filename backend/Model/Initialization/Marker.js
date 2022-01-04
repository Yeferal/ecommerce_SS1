const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Marker = sequelize.define('Marker', {
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Marker',
        tableName: 'Marcador',
        timestamps: false
});

module.exports = Marker;