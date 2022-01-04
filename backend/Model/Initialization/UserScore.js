const { Model, DataTypes} = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo 

const Score = sequelize.define('Score', {
    id_factura: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    puntuacion: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
}, {
        sequelize,
        modelName: 'Score',
        tableName: 'Puntuacion',
        timestamps: false
});

module.exports = Score;
