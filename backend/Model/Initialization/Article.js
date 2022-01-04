const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Article = sequelize.define('Article', {
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minimo_stock: {
        type: DataTypes.INTEGER
    }    
}, {
    sequelize,
    modelName: 'Article',
    tableName: 'Articulo',
    timestamps: false
});

module.exports = Article;