const Account = require('./Initialization/Account');
const Business = require('./Initialization/BusinessAccount');
const Standard = require('./Initialization/StandardAccount');
const Card = require('./Initialization/Card');
const Member = require('./Initialization/Membership');
const Article = require('./Initialization/Article');
const Post = require('./Initialization/Post');
const Service = require('./Initialization/Service');

const BuySell = require('./Initialization/BuyAndSell');
const Comment = require('./Initialization/Comment');
const ContactBook = require('./Initialization/ContactBook');
const Conversation = require('./Initialization/Conversation');
const Exchange = require('./Initialization/Exchange');
const Invoice = require('./Initialization/Invoice');
const Marker = require('./Initialization/Marker');
const Message = require('./Initialization/Message');
const PostExchange = require('./Initialization/PostExchange');
const Promotions = require('./Initialization/Promotions');
const Proposal = require('./Initialization/Proposal');
const Tag = require('./Initialization/Tag');
const TagAssign = require('./Initialization/TagAssignment');
const Transaction = require('./Initialization/Transaction');
const UserScore = require('./Initialization/UserScore');
const Verification = require('./Initialization/Verification');
const Wallet = require('./Initialization/Wallet');
const Token = require('./Initialization/VerificationToken');
const Notifications = require('./Initialization/Notifications');

//Creacion de las llaves foraneas


//Cuenta_estandar
Account.hasOne(Standard, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_general',
        allowNull: false
    }
});
Standard.belongsTo(Account, {foreignKey: 'cuenta_general'});

//Cuenta_empresarial
Account.hasOne(Business, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_general',
        allowNull: false
    }
});

//Afiliacion
Business.hasMany(Member, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_cuenta_empresarial',
        allowNull: false
    }
});
Member.belongsTo(Business, {foreignKey: "id_cuenta_empresarial"})

Standard.hasMany(Member, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_usuario',
        allowNull: false
    }
});
Member.belongsTo(Standard, {foreignKey: "id_usuario"});



//Verificado
Account.hasOne(Verification, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta',
        allowNull: false
    }
});

//Transaccion
Account.hasMany(Transaction, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_emisora',
        allowNull: false
    }
});

Account.hasMany(Transaction, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_receptora',
        allowNull: false
    }
});

//Post
Account.hasMany(Post, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta',
        allowNull: false
    }
});
Post.belongsTo(Account, { foreignKey: "cuenta"});

//Servicio
Post.hasOne(Service, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_post',
        allowNull: false
    }
});
Service.belongsTo(Post, { foreignKey: "id_post" });

//Articulo
Post.hasOne(Article, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_post',
        allowNull: false
    }
});
Article.belongsTo(Post, { foreignKey: "id_post" });

//Conversacion
Account.hasMany(Conversation, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_uno',
        allowNull: false
    }
});

Account.hasMany(Conversation, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_dos',
        allowNull: false
    }
});

//Mensaje
Conversation.hasMany(Message, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_conversacion',
        allowNull: false
    }
});


Account.hasMany(Message, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_receptora',
        allowNull: false
    }   
});

Account.hasMany(Message, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_emisora',
        allowNull: false
    }
});

    //Comentario
Post.hasMany(Comment, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_post',
        allowNull: false
    }
});

Account.hasMany(Comment, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_emisora',
        allowNull: false
    }
});

//Compra_venta
Post.hasMany(BuySell, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_post',
        allowNull: false
    }
});

Invoice.hasMany(BuySell, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'no_factura',
        allowNull: false
    }
});
BuySell.belongsTo(Post, {foreignKey: 'id_post'});
//Factura
Account.hasMany(Invoice, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_efectiva',
        allowNull: false
    }
});

//Puntuacion
Invoice.hasOne(UserScore, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_factura',
        allowNull: false
    }
});

//Marcador
Post.hasMany(Marker, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_post',
        allowNull: false
    }
});

Account.hasMany(Marker, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta',
        allowNull: false
    }
});

//Asignacion_etiqueta
Tag.hasMany(TagAssign, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_etiqueta',
        allowNull: false
    }
});

Post.hasMany(TagAssign, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_post',
        allowNull: false
    }
});

//Agenda
Account.hasMany(ContactBook, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta',
        allowNull: false
    }
});
ContactBook.belongsTo(Account, {foreignKey: "cuenta"});

Account.hasMany(ContactBook, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta_contacto',
        allowNull: false
    }
});
ContactBook.belongsTo(Account, {foreignKey: "cuenta_contacto"});

//Propuesta
Proposal.hasOne(Proposal, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'propuesta_anterior',
        allowNull: false
    }
});

//Intercambio
/*
Proposal.hasOne(Exchange, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_propuesta',
        allowNull: false
    }
});

//Post_intercambio
Exchange.hasMany(PostExchange, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_intercambio',
        allowNull: false
    }
});*/

Post.hasMany(PostExchange, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'post',
        allowNull: false
    }
});

//Cartera
Account.hasMany(Wallet, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'cuenta',
        allowNull: false
    }
});

//Promocion
Post.hasMany(Promotions, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'post',
        allowNull: false
    }
});
//Tarjeta
Account.hasMany(Card,{
    onDelete:'CASCADE',
    foreignKey:{
        name:'id_cuenta',
        allowNull: false
    }
});

//Token
Account.hasMany(Token, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_cuenta',
        allowNull: false 
    }
})

//Notificacion
Account.hasMany(Notifications, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'usuario_recibe',
        allowNull: false
    }
});
Notifications.belongsTo(Account, { foreignKey: 'usuario_recibe' });


Account.hasMany(Notifications, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'usuario_envia',
        allowNull: false
    }
})
Notifications.belongsTo(Account, { foreignKey: 'usuario_envia'});

// Service.belongsTo(Post);