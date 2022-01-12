const colors = require('colors');

//Importaciones necesarias para express
const express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const path = require('path');

//Definicion de puerto
const PORT = process.env.PORT || 65000;

//Cors
const cors = require('cors');

//Socket.io

const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const server = createServer(app);
const io = new Server(server, {  })
// require('./Controller/Socket')(io);


//Db
const sequelize = require("./Model/db");
const Models = require('./Model/CreateModels');

const {database} = require('./key');




//Passport
const passport = require('passport')
const session = require('express-session')
const MySQLStore = require('express-mysql-session');
// const Account = require('./Model/Initialization/Account');

//Rutas
const AccountRoutes = require('./Routes/AccountRoutes');
const ProductRoutes = require('./Routes/ProductRoutes');
const OrderRoutes = require('./Routes/OrderRoutes');
const ListOrderRoutes = require('./Routes/ListOrderRoutes');
const Shop = require('./Routes/ShopRoutes');
const ConnectRutes = require('./Routes/ConnectRutes');

//inicializaciones
require('./Lib/Passport');


//middleware
const corsOptions = {origin: "http://localhost:4401"}
app.use(cors({
    origin: "http://localhost:4401",
    credentials: true
}));
// const corsOptions = {origin: "https://ss1-eccomerce.herokuapp.com/api"}
// app.use(cors({
//     origin: "https://ss1-eccomerce.herokuapp.com/api",
//     credentials: true
// }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser());

app.use(session({
    secret: 'fruitshop',
    resave: false,
    saveUninitialized: false,
    // cookie:{
    //     maxAge:36000000,
    //     httpOnly:true,
    //     secure:false
    // },
   store: new MySQLStore(database)
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

//Agregar a app
app.use("/api", AccountRoutes);
app.use("/api", ProductRoutes);
app.use("/api", OrderRoutes);
app.use("/api", ListOrderRoutes);
app.use("/api", Shop);
app.use("/api", ConnectRutes);

// app.use(express.static(__dirname+'/frontend/dist/frontend'));
// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/frontend/dist/frontend/index.html'));
// });

app.use(express.static(__dirname+'/frontend/dist/frontend'));
app.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'/frontend/dist/frontend/index.html'));
    console.log(__dirname,  "  asdfdfasd")
});

app.use('/images', express.static(path.resolve('images')));


server.listen(PORT, function(){
    console.log(`la app ha sido arrancada en ${PORT}`.yellow);
    sequelize.sync({force: true}).then(() => {
        console.log("Conexion a DB establecida".green);
    }).catch(error => {
        console.log("Se ha producido un error al momento de intentar conectar con la db".red,error);
    })
})
