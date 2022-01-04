const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const PostExchange = sequelize.define('PostExchange', {
    id_intercambio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    estado:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    },
    id_user:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
} , { 
        sequelize,
        modelName: 'PostExchange',
        tableName: 'Post_intercambio',
        timestamps: false
});

module.exports = PostExchange;