//AFILIACION
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo
const Membership = sequelize.define('Membership' ,{
    id_cuenta_empresarial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_afiliacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_cierre: {
        type: DataTypes.DATE
    }
} , {
        sequelize,
        modelName: 'Membership',
        tableName: 'Afiliacion',
        timestamps: false
});

module.exports = Membership;