class issue{


    constructor(){


        this.title = "issue1"
        this.repositoryNameAssociated = "repository1"
        this.estatus = "pending"
        this.numberOfComments = 0
        this.labels = "issue"
        this.author = "moy314"
        this.dateCreated = "01/01/2022"
        this.lastUpdated = "01/01/2022"
    }

    getTitleAndAuthor(){

        return `title: ${this.title} author ${this.author}`;

    }
    getGeneralInfo(){

        return ` ${this.repositoryNameAssociated} status: ${this.status}`;

    }

}


//------------------------------------------------------------------------------------




    class pullRequest{


        constructor(){

        this.title =  "PR1"
        this.branchName =  "main"
        this.dateCreated =  "01/01/2022"
        this.status = "pending"
        this.repositoryNameAssociated = "repository 1"
        this.author = "autor 1"

        }

        
        
        getStatus(){
        
            return `status:${this.status} `;
        
        }

        getTitleAndAutor(){
        
            return `title: ${this.title} author: ${this.author} `;
        
        }
        


    } 


    //---------------------------------------------------------------------




    class twitter_{

        constructor(){


            this.user = {user: "moises", username: "@moy314", bio: "", age: 26}
            this.notificaciones = { nottificacion:""}
            this.tweets = {
                tweet1 : {fechaPublicacion:"01/01/2022",totalLikes:20,retweets:20 },
                tweet2 : {fechaPublicacion:"01/01/2022",totalLikes:20,retweets:20 },
                tweet3 : {fechaPublicacion:"01/01/2022",totalLikes:20,retweets:20 }
        
        
        
            },
        
            this.likes = 
            {
        
            publiccion1: {autor:"usuario1",fechaPublicacion:"01/01/2022",totalLikes:20},
            publicacion2:{autor:"usuario2",fechaPublicacion:"01/01/2022",totalLikes:20},
            publicacion3:{autor:"usuario3",fechaPublicacion:"01/01/2022",totalLikes:20}
        
            }





        }

    }

    //--------------------------------------


    const uber = {

        profile:{nombre:"usuario1",numeroViajes:98,fechaInicio:"01/01/2022",direccion:""},
        travel: "",
        ubicacionesFrecuentes:[
            {direccion:"",fechaVisita:""},
            {direccion:"",fechaVisita:""},
            {direccion:"",fechaVisita:""},
        ]
    
    }

    class uber_{  


        constructor(){
        this.profile = {nombre:"usuario1",numeroViajes:98,fechaInicio:"01/01/2022",direccion:""},
        this.travel =  "",
        this.ubicacionesFrecuentes = [
            {direccion:"",fechaVisita:""},
            {direccion:"",fechaVisita:""},
            {direccion:"",fechaVisita:""},
        ]
    
    }


    }