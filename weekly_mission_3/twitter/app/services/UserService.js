const User = require('./../models/User');

 class UserService{

    static create(id,username,name){

        //const usuario = new User(id,username,name,"sin bio");

        return new User(id,username,name,"sin bio")
    }

 }

 module.exports = UserService;