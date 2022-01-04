const { Model, DataTypes} = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Service = sequelize.define('Service', {
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_servicio: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
} , {
    sequelize,
    modelName: 'Service',
    tableName: 'Servicio',
    timestamps: false
}); 

module.exports = Service;