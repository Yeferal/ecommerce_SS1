const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion de modelo

const Account = sequelize.define('Card',{
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,        
        autoIncrement: false,
        primaryKey:true,
    },
    no_tarjeta: {
        type: DataTypes.BIGINT,
        allowNull: false,
        
        autoIncrement: false    
    },
    fecha_corte:{
        type: DataTypes.STRING,
        allowNull:false
    },
    codigo_seguridad:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    activa:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
} , {
    sequelize,
    modelName: 'Card',
    tableName: 'tarjeta',
    timestamps: false
});

module.exports = Account;