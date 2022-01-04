const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Verification = sequelize.define('Verification', {
    verificado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    fecha_verificacion: {
        type: DataTypes.DATE
    },
    cuenta: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
} , {
        sequelize,
        modelName: 'Verification',
        tableName: 'Verificacion',
        timestamps: false
});

module.exports = Verification;