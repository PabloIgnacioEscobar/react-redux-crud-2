// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({

//  }) 
 //Dentro de este objeto vamos a poder dividir el estado en multiples archivos, para poder mantenerlos.

//  export default store /* Aqui lo exporta individualmente, es decir solo al const y no toda la app. */
 
 //Para importar este const store tenemos que usar un props provider. Que es un componente que va tener toda la aplicacion. Entonces primero, en index importamos el componente Provider desde react-redux y llamamos la variable de const.
 //-------------------------------------------
//[Luego tenemos que importar el reducers],este son la forma en que vamos a poder actualizar. Lo que no ofrece redux para esto son los Redux State Slice. Un slice es como una parte de todo el estado. Redux nos dice que cremos en la carpeta src una carpeta llamada features,entonces dentro creamos una carpeta que vaya a la par con el nombre del archivo.js que estara dentro de este. Esto en teoria es para autenficar. Pero no es obligatorio.

import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer //No es mas que el estado inicial que hay por defecto en ese momento. tasks, es solo la propiedad, un nombre de tasksReducer.
    }
})
//El store tiene varias propiedades, entonces dentro de tasks: tasksReducer va la propieda reducer,reducer es un objeto.
//------------------------------------------------------------------
