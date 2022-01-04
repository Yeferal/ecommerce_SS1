const express = require('express');

function bankResponse(){
    const randomVal = Math.floor(Math.random()*100);
    if(randomVal%2 == 0){
        return true;
    }else{
        return false;
    }
}

module.exports ={
    bankResponse
}