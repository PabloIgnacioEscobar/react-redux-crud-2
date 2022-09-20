// import './App.css';
// import {useSelector} from 'react-redux'
// import TaskForm from './components/TaskForm';
// import TasksList from './components/TasksList';/* Tener cuidado con las s de tasks. */

// function App() {
//   const tasksState = useSelector(state => state.tasks)/*Esto es como llamar al estadoInitial(initialState) del name: tasks. state.tasks seria como el arreglo en blanco.  */
//   console.log(tasksState)

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <TaskForm/>
//       <TasksList/>
//     </div>
//   );
// }

// export default App;
//Luego de haber configurado todo, llamamos al estado.Lo primero es impotar desde react redux, los useDispath y useSelector. useDispath seran las funciones que querramos pasar para poder actualizar el estado. El useSelector van a ser la forma de poder traer los datos dentro del estado, es para seleccionar, o traer algo DESDE el estado.
//------------------------------------------------------------------
// [List & Create] AQUI NO VAMOS A NESECITAR el useSelector.
// import './App.css';
// import TaskForm from './components/TaskForm';
// import TasksList from './components/TasksList';/* Tener cuidado con las s de tasks. */

// function App() {
  
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <TaskForm/>
//       <TasksList/>
//     </div>
//   );
// }

// export default App;
//-----------------------------------------------------------------------
//[Delete]
// import './App.css';
// import TaskForm from './components/TaskForm';
// import TasksList from './components/TasksList';

// function App() {
  
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <TaskForm/>
//       <TasksList/>
//     </div>
//   );
// }

// export default App;
//-----------------------------------------------------------------------
//[React-router-dom@6] En lugar de estar mostrando el taskforma y el taskList lo que voy hacer es que dependiendo de la url que se visite voy a mostrarlos.
// import './App.css';
// import TaskForm from './components/TaskForm';
// import TasksList from './components/TasksList';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

// function App() {
  
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<TasksList/>}/>
//           <Route path='/create-task' element={<TaskForm/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
//-----------------------------------------------------------------------
//[Update]¿Como editar una tarea? [TAILWINDS]
import './App.css';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className='flex items-center justify-center h full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>
          <Route path='/edit-task/:id' element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
