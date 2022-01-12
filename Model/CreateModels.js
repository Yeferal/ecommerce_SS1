const Account = require('./Initialization/Account');
const Bill = require('./Initialization/Bill');
const ListOrder = require('./Initialization/ListOrder');
const Order = require('./Initialization/Order');
const Product = require('./Initialization/Product');
const Sale = require('./Initialization/Sale');
const User = require('./Initialization/User');
const Token = require('./Initialization/VerificationToken');

//Cuenta
Account.hasOne(User, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_cuenta',
        allowNull: false
    }
});

User.belongsTo(Account, { foreignKey: "id_cuenta" });
//Usuario
User.hasMany(Order, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_usuario',
        allowNull: false
    }
});

Order.belongsTo(User, { foreignKey: "id_usuario" });

User.hasMany(Bill, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_efectiva',
        allowNull: false
    }
});

Bill.belongsTo(User, { foreignKey: "cuenta_efectiva" });
//Producto
Product.hasMany(ListOrder, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_producto',
        allowNull: false
    }
});

ListOrder.belongsTo(Product, { foreignKey: "id_producto" });

Product.hasMany(Sale, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_producto',
        allowNull: false
    }
});

Sale.belongsTo(Product, { foreignKey: "id_producto" });
//Orden
Order.hasMany(ListOrder, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_orden',
        allowNull: false
    }
});

ListOrder.belongsTo(Order, { foreignKey: "id_orden" });
//Lista_Orden

//Factura
Bill.hasMany(Sale, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'no_factura',
        allowNull: false
    }
});

Sale.belongsTo(Bill, { foreignKey: "no_factura" })
//Venta


//Token
Account.hasMany(Token, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_cuenta',
        allowNull: false 
    }
})