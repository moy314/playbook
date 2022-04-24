const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]



   /*
   
Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
Imprime el stack de cada explorer, usa FOR EACH
Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
Busca el primer explorer que sea de la CDMX, usa FIND
Obtén la suma de todos los exercises_completed, usa REDUCE
Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
   
   */ 

//1
explorers.forEach(explorer => console.log(explorer.name));

//2
explorers.forEach(explorer => console.log(explorer.stack));

//3
console.log(explorers.map( explorer =>{

    return explorer.stack

}));


//4

const filtrado = explorers.filter(explorer => { return explorer.stack.includes('js')
 })
console.log(filtrado )


//5
console.log(5)

const encontrar = explorers.find(explorer => explorer.city === 'CDMX')

console.log(encontrar)


//6

console.log(6)

const suma = explorers.reduce((acc, item) =>   {
  return acc = acc + item.exercises_completed},0 )
console.log(suma)


//7
console.log("ejercicio 7");

const alguno = explorers.some(explorer => {
 return explorer.missions.frontend.exercisesFinished == true
} )

console.log(alguno);

console.log("ejercicio 8");




const todos = explorers.every(explorer => {
 return explorer.missions.onboarding.isFinished == true
} )

console.log(todos);