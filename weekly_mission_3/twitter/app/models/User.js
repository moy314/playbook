class User{

    constructor(id,username,name,bio){

        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();


    }


    getUsername(){
        return this.username;
    }

    getBio(){
        return this.bio;
    }

    getDateCreated(){
        return this.dateCreated;
    }

    getLastUpdated(){
        return this.lastUpdated;
    }

    


   set setUsername(newUsername){

        this.username = newUsername;
    }

    set setBio(newBIo){

        this.bio = newBIo;
    }

}

module.exports = User;