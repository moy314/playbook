

const issue = {

    title: "issue1",
    repositoryNameAssociated: "repository1",
    status: "pending",
    numberOfComments: 0,
    labels: "issue",
    author: "moy314",
    dateCreated: "01/01/2022",
    lastUpdated: "01/01/2022",
    getTitleAndAuthor(){

        return `title: ${this.title} author ${this.author}`;

    },
    getGeneralInfo(){

        return ` ${this.repositoryNameAssociated} status: ${this.status}`;

    }

}



console.log(issue.getGeneralInfo());
console.log(issue.getTitleAndAuthor());



const pullRequest = {
title: "PR1",
branchName: "main",
dateCreated: "01/01/2022",
status: "pending",
repositoryNameAssociated: "repository 1",
author:"autor 1",


getStatus(){

    return `status:${this.status} `;

},
getTitleAndAutor(){

    return `title: ${this.title} author: ${this.author} `;

}


}

//-------------------ejercicios

const twitter = {
    
    user : {user: "moises", username: "@moy314", bio: "", age: 26},
    notificaciones:{ nottificacion:""},
    tweets:{
        tweet1 : {fechaPublicacion:"01/01/2022",totalLikes:20,retweets:20 },
        tweet2 : {fechaPublicacion:"01/01/2022",totalLikes:20,retweets:20 },
        tweet3 : {fechaPublicacion:"01/01/2022",totalLikes:20,retweets:20 }



    },

    likes : 
    {

    publiccion1: {autor:"usuario1",fechaPublicacion:"01/01/2022",totalLikes:20},
    publicacion2:{autor:"usuario2",fechaPublicacion:"01/01/2022",totalLikes:20},
    publicacion3:{autor:"usuario3",fechaPublicacion:"01/01/2022",totalLikes:20}

    }
    
        

}


const uber = {

    profile:{nombre:"usuario1",numeroViajes:98,fechaInicio:"01/01/2022",direccion:""},
    travel: "",
    ubicacionesFrecuentes:[
        {direccion:"",fechaVisita:""},
        {direccion:"",fechaVisita:""},
        {direccion:"",fechaVisita:""},
    ]

}