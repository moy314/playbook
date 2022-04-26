class Spiderman{

    constructor(nombre,edad,actor,numPeliculas,estudioCine){

        this.nombre = nombre;
        this.edad = edad;
        this.actor = actor;
        this.numPeliculas = numPeliculas;
        this.estudioCine = estudioCine;

    }

    getInfo(){

        return `hey i'm ${this.actor} from ${this.estudioCine}`

    }


}
module.exports = Spiderman