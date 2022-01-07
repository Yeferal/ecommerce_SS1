const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Product = sequelize.define('Product', {
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    path_img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    activado: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
}, {
    sequelize,
    modelName: 'Product',
    tableName: 'Producto',
    timestamps: false 
});