const repo = {

    
        name: "lauchX",
        author: "moy314",
        language: "JS",
        numberOfCommits:100 ,
        stars: 123,
        forks: 0,
        issues_open: 0,
        issues_close: 0,

        getTotalIssues(){

            return this.issues_close + this.issues_open



        },
        getGeneralInfo(){

            return ` this repository is named ${this.name} and was created by ${this.author}` 
        }





}


console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())