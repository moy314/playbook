 class pokemon{

    constructor (name) {
        this.name = name
      }

    sayHello(){
        console.log("hello")
    }
    sayMessage(message){

        console.log(message)

    }
}

/*module.exports = {

    pokemon:pokemon
}*/

module.exports.pokemon = pokemon // Clase