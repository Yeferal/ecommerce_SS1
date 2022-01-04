//Dentro de esta clase se verifica si una conversacion ya fue creada previamente o no.
const Conversation = require('../../Model/Querys/Conversation');

async function verifyNormalConversation(emisor, receptor){
    DataSend = await Conversation.searchUserId(emisor);
    DataReceptor = await Conversation.searchUserId(receptor);
    existConv = await Conversation.searchAndGive(emisor, receptor);
    if(existConv != null){
        if(existConv.anonimo){
            //Se crea la conversacion de tipo normal
            await Conversation.create(DataSend.id_cuenta, DataReceptor.id_cuenta, false);    
        } else {
            console.log('Ya existe una conversacion con este usuario');
        }
    } else {
        //Se crea la conversacion
        await Conversation.create(DataSend.id_cuenta, DataReceptor.id_cuenta, false);    
    }
    //Luego de este proceso dentro del backend debe ser redirigido al chat con la persona elegida
}

async function verifyAnonimous(emisor, receptor){
    DataSend = await Conversation.searchUserId(emisor);
    DataReceptor = await Conversation.searchUserId(receptor);    
    existConv = await Conversation.searchAndGive(emisor, receptor);
    if(existConv != null) {
        if(existConv.anonimo == false){
            //Se crea la conversacion de tipo anonimo
            await Conversation.create(DataSend.id_cuenta, DataReceptor.id_cuenta, true);     
        } else {
            console.log('Ya existe una conversacion con este usuario');
        }
    } else {
        //Se crea la conversacion
        await Conversation.create(DataSend.id_cuenta, DataReceptor.id_cuenta, true);
    }
    //Luego de este proceso dentro del backend debe ser redirigido al chat con la persona elegida
}

module.exports = {
    verifyNormalConversation, verifyAnonimous
}