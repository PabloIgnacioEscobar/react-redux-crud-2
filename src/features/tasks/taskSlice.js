 /* Aqui vamos a poder definir las funciones dentro del estado. Y cuando hablamos de funciones nos referimos a crear tareas que seria añadir datos a un arreglo, eliminar tareas que seria quitar datos un arreglo,actualziar que seria modificar un objeto dentro de un arreglo o listar que seria traer todos los datos de un arreglo. */ 

 //Lo primero es llamar una funcion que viene desde reduxToolkit que se llama create slice,.
//  import { createSlice } from '@reduxjs/toolkit'

//  createSlice({
//     name: 'tasks',
    // initialState: [] /* Aqui estamos diciendo bueno, cuando mi app inicie, el estado de estas tareas va ser un arreglo en blanco.No tiene que ser un arreglo, puede ser cualquier dato: '' {} false 0123 etc*/
//  })
 //Siempre nos va pedir que dentro le colomenos un nombre. Luego tiene una propiedad que que se llama initialState, es como la funcion useState donde hay un nombre de la variable un una funtion, que dentro de estos dos hay un arreglo que, dentro de esta funcion hay un valor inicial, que puede ser un valor en blanco, un string vacio, un arreglo, un cero etc, es el que esta al lado del useState(aqui dentro.).
 //-----------------------------------------------------------------
 //Que es lo siguiente que deberiamos hacer? lo siguiente seria compartirlo, y para compartirlo hay que exportarlo.
//  import { createSlice } from '@reduxjs/toolkit'

//  export const taskSlice = createSlice({
//     name: 'tasks',
//     initialState: [],
//     reducers: {
//     }
// })
//Con esto creamos el estado incial,pero si yo quiero decirle que es lo que va poder hacer, tiene el reducer, que aji dentro tiene funciones para acutalizar el estado. Entonces lo importamos en configureStore.

// export default taskSlice.reducer/*Veanlo asi, si yo importo taskSlice traemos todo el estado en si (name,initialState,reducers.), pero cuando exporto por defecto estoy trayendo los reducers de taskSlice, y ante esto lo llamamos con un nombre.*/
//------------------------------------------------------------------
//List & Create. Creamos algunas tareas para ver como funciona el acceso a ciertos datos-
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     {
//         id: "1",
//         title: "Task 1",
//         description: "Task 1 description",
//         completed: false
//     },
//     {
//         id: "2",
//         title: "Task 2",
//         description: "Task 2 description",
//         completed: false
//     }
// ]
// export const taskSlice = createSlice({
//    name: 'tasks',
//    initialState: initialState,
//    reducers: {
//     /* tenemos que crearlo como la propiedad de un objeto:
//      */ addTask: (state,action) => {
//         state.push(action.payload); /* Pero si queremos trater el action vamos a traer el payload y type entonces si queremos el nombre ponemos action.type, o si queremos el payload: action.payload. Y el state es justamente el initialState.*/ /* ¿Como hacemos para añadir un objeto dentro del arreglo?:state.push(action.payload). Pero en react no podemos usar muchas veces este metodo push.Entonces lo ideal seria copiar el estado [...state, action.payload] pero como redux reduce mucho la forma de actualizar el estado.*/ /* Con state.push(action.payload) vamos a tener un error de que nesecitan un identificaodr unico.Entonces tenemos que pasarle este valor extra.[Instalamos npm i uuid que genera indentificadores unicos.]*/
//      }
//    }
// })

// export const {addTask} = taskSlice.actions /* Esto sirve por que ahora desde otras partes de la aplicacion van a poder acceder a esta funcion.ej y ahora lo importamos[taskfrom 23] */
// export default taskSlice.reducer
// //Si queremos añadir un dato,vamos a tener que crear un formulario.
// //El addTask podra ser llamado desde cualquier lado de la aplicacion.
// //El action sera el datos que le pasamos y tambien podra acceder al estado actual de la aplicacion. Pon console.log(state,action) para verlo.
//-----------------------------------------------------------------------
// [Delete]
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     {
//         id: "1",
//         title: "Task 1",
//         description: "Task 1 description",
//         completed: false
//     },
//     {
//         id: "2",
//         title: "Task 2",
//         description: "Task 2 description",
//         completed: false
//     }
// ]
// export const taskSlice = createSlice({
//    name: 'tasks',
//    initialState: initialState,
//    reducers: {
//         addTask: (state,action) => {
//         state.push(action.payload);
//      },
//     deleteTask: (state, action) => {
//         /*[91]*/const taskFound = state.find(task => task.id === action.payload)
//         if (taskFound) {
//             state.splice(state.indexOf(taskFound), 1)
//         }
//     }
//    }
// })

// export const {addTask, deleteTask} = taskSlice.actions
// export default taskSlice.reducer
//El state seria el arreglo de tareas, find seria buscar la tarea.Action.payload por que es el string.splice recibe dos parametros el primero es el indice y luego la cantidad de elementos que quieto quitar. indexOF es el indice de la tarea en este caso que queremos encontrar.
//-----------------------------------------------------------------------
//[React-router-dom@6] ¿Como añadir react router a nuestra aplicacion?
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     {
//         id: "1",
//         title: "Task 1",
//         description: "Task 1 description",
//         completed: false
//     },
//     {
//         id: "2",
//         title: "Task 2",
//         description: "Task 2 description",
//         completed: false
//     }
// ]
// export const taskSlice = createSlice({
//    name: 'tasks',
//    initialState: initialState,
//    reducers: {
//         addTask: (state,action) => {
//         state.push(action.payload);
//      },
//     deleteTask: (state, action) => {
//         const taskFound = state.find(task => task.id === action.payload)
//         if (taskFound) {
//             state.splice(state.indexOf(taskFound), 1)
//         }
//     }
//    }
// })

// export const {addTask, deleteTask} = taskSlice.actions
// export default taskSlice.reducer
//-----------------------------------------------------------------------
//[Update] ¿Como editar una tarea?
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    }
]
export const taskSlice = createSlice({
   name: 'tasks',
   initialState: initialState,
   reducers: {
    addTask: (state,action) => {
        state.push(action.payload);
    },

    editTask: (state, action) => {
      const {id, title, description} = action.payload

      const foundTask = state.find(task => task.id === id)
      if (foundTask) {
        foundTask.title = title
        foundTask.description = description
      }
    },

    deleteTask: (state, action) => {
        const taskFound = state.find(task => task.id === action.payload)
        if (taskFound) {
            state.splice(state.indexOf(taskFound), 1)
        }
    },
   }
});

export const {addTask, deleteTask, editTask} = taskSlice.actions
export default taskSlice.reducer
//-----------------------------------------------------------------------