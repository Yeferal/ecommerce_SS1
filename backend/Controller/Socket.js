const Account = require('../Model/Querys/AccountModel');
const Message = require('../Model/Querys/Message');
const Conversation = require('../Model/Querys/Conversation');
const verifyConv = require('./Verifications/Conversation');

const NotifyQuery = require('../Model/Querys/NotifyModel');

var users = {};
var boolSms = {};

module.exports = async function(io){

    io.on('connection', async socket => {
        console.log('Nuevo usuario conectado');
        socket.on('new user', (data) => {
            if(data in users){
              //cb(false);
              users[data] = socket.id;
              updateNicknames();
            } else {
              //cb(true);
              socket.nickname = data;
              users[data] = socket.id;
              updateNicknames();
            }
        });

        socket.on('send history data', async function(userSend, userReceive, anonimous){
          console.log('escuchando');
          if(anonimous == 0){
            await verifyConv.verifyNormalConversation(userSend, userReceive);
          } else if(anonimous == 1){
            await verifyConv.verifyAnonimous(userSend,userReceive);
          } 
          conversation = await Conversation.comprobateAnonymous(userSend, userReceive, anonimous);
          if(conversation != null){
            let messages = await Message.searchConversation(conversation.id);
            var userSenders = [];
            for(let i = 0; i < messages.length; i++){
              userSenders[i] = await Account.searchUserByPK(messages[i].cuenta_emisora);
            }
            if(messages != null){
             // io.to(users[userReceive]).emit('old messages', messages, userSenders, 'luis');
              io.to(users[userSend]).emit('old messages', messages, userSenders, 'luis');
            }
          } 
        })
          
        

        //escuchando
        socket.on('send message', async function(data, userSend, userReceive, anonimous) {
          console.log("NETRO AQUI");
            initConv = userSend+userReceive;
            initConv2 = userReceive+userSend;          
            conversation = await Conversation.comprobateAnonymous(userSend, userReceive, anonimous);
            if(initConv in boolSms || initConv2 in boolSms){
              console.log('aqui es a donde yo entro');
            } else {
              boolSms[initConv] = socket.id;
              /*if(conversation != null){
                let messages = await Message.searchConversation(conversation.id);
                var userSenders = [];
                for(let i = 0; i < messages.length; i++){
                  userSenders[i] = await Account.searchUserByPK(messages[i].cuenta_emisora);
                }
                if(messages != null){
                  io.to(users[userReceive]).emit('old messages', messages, userSenders, 'luis');
                  io.to(users[userSend]).emit('old messages', messages, userSenders, 'luis');
                }
              } */
            }
            idSend = await Conversation.searchUserId(userSend);
            idReceive = await Conversation.searchUserId(userReceive);




  /*          existConv = await Conversation.search(userSend,userReceive);
            if(existConv == 0){  //No existe la conversacion, toca crearla
              await Conversation.create(idSend.id_cuenta, idReceive.id_cuenta, anonimous);
            }*/





            //crear el mensaje
            await Message.createInSocket(conversation.id, data, idSend.id_cuenta, idReceive.id_cuenta, new Date().toISOString().slice(0, 19).replace('T', ' ')); //Falta la fecha como ultimo parametro
            if(userReceive in users){
              myNick = userSend;
              if(conversation.anonimo){
                myNick = 'noOne'
              } 
              console.log("estoy enviando el mensaje ");
              io.to(users[userReceive]).emit('whisper', {
                data,
                nick: myNick
              });
              //Crea la notificacion
              console.log('buenas tardes sfasfa');
              NotifyQuery.createNotification(idSend.id_cuenta, idReceive.id_cuenta,'Mensaje','Nuevo mensaje!');
              io.to(users[userReceive]).emit('send notifications');
              
            }
            if(userSend in users){
              io.to(users[userSend]).emit('whisper', {
                data,
                nick: 'yo'
              });
            }
        })

    });    


    function updateNicknames(){
      io.sockets.emit('usernames', Object.keys(users));
    }
}


