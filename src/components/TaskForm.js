// import {useSelector} from 'react-redux'

// import { useState } from "react"

// function TaskForm() {

//   console.log('taskform')

//   const stateTasks = useSelector(state => state.tasks)
//   console.log(stateTasks)

//   return (
//     <div>TaskForm</div>
//   )
// }

// export default TaskForm
//Como pueden ver nosotros estamos llamando a los datos del Estado Inicial pero, pero compomentes como app tambien lo hacen. Entonces es un lugar donde va estar todo nuestro estado y de esta forma cualquier componente no importa si esta dentro o esta separado o esta en cualquier otra parte va poder seguir accediendo a ese mismo dato.
//------------------------------------------------------------------
// [List & Create]Aqui no vamos a nesecitar el use selector.
// import {useState} from 'react'
// import {useDispatch} from 'react-redux'
// import {addTask} from '../features/tasks/taskSlice'
// import {v4 as uuid} from 'uuid'

// function TaskForm() {

//   const [task, setTask] = useState({
//     title: '',
//     description: ''
//   })

//   const dispatch = useDispatch()/* Es una funcion que nos va permitir disparar eventos desde en este caso: el taskSlice y por ahra lo unico que accede es al addTask ¿Como accedemos al addTask si esta dentro de un objeto? lo que tenemos que hacer es exportar funciones individuales: [53 de taskSlice] */

//   const handleChange = e => {
//     setTask(
//       {
//         ...task,
//         [e.target.name]: e.target.value,
//       }
//     )
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addTask({
//       ...task,
//       id: uuid(),
//     }))/* Tenemos que ejecutar el addTask dentro de dispatch el addTask espera dos parametros, lo unico que podemos pasarle realmente algo es al action.[ir a hoja pregunta ¿que es la funcion proxy?] Si queremos pasar el titulo (task 1 o 2..etc) mas el description, simplemente llamamos al objeto task o variable task. podemos verlo en console.*/ /* Cuando estemos por añadir una tarea dentro del dispath lo que vamo hacer es realmente hacer una copia de ese objeto, y hacer un id: que va ser la ejecucion del uuid. Entonces lo que estamos creando es el titulo de la description mas una propiedad extra llamada id. */
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="title" type="text" placeholder="title" onChange={handleChange}/>

//       <textarea name="description" placeholder="description" onChange={handleChange}></textarea>

//       <button>Save</button>
//     </form>
//   )
// }

// export default TaskForm;
// //En console el resultado de esto no puede ver, asique lo que hay que hacer es instalar,reactdevtools, ya lo tenemos.
// //DATO INTERESANTE: const [task, setTask] = useState() el setTask lo que hacia era que es una funcion que actualizaba el task. En redux es lo mismo solo que cambia un poco la sintaxys.
//-----------------------------------------------------------------------
//[Delete]
// import {useState} from 'react'
// import {useDispatch} from 'react-redux'
// import {addTask} from '../features/tasks/taskSlice'
// import {v4 as uuid} from 'uuid'

// function TaskForm() {

//   const [task, setTask] = useState({
//     title: '',
//     description: ''
//   })

//   const dispatch = useDispatch()

//   const handleChange = e => {
//     setTask(
//       {
//         ...task,
//         [e.target.name]: e.target.value,
//       }
//     )
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addTask({
//       ...task,
//       id: uuid(),
//     }))

//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="title" type="text" placeholder="title" onChange={handleChange}/>

//       <textarea name="description" placeholder="description" onChange={handleChange}></textarea>

//       <button>Save</button>
//     </form>
//   )
// }

// export default TaskForm;
//-----------------------------------------------------------------------
//[React-router-dom@6]
// import {useState} from 'react'
// import {useDispatch} from 'react-redux'
// import {addTask} from '../features/tasks/taskSlice'
// import {v4 as uuid} from 'uuid'
// import {useNavigate} from 'react-router-dom'

// function TaskForm() {

//   const [task, setTask] = useState({
//     title: '',
//     description: ''
//   })

//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleChange = e => {
//     setTask(
//       {
//         ...task,
//         [e.target.name]: e.target.value,
//       }
//     )
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addTask({
//       ...task,
//       id: uuid(),
//     }))
//     navigate('/')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="title" type="text" placeholder="title" onChange={handleChange}/>

//       <textarea name="description" placeholder="description" onChange={handleChange}></textarea>

//       <button>Save</button>
//     </form>
//   )
// }

// export default TaskForm;
//-----------------------------------------------------------------------
//[Update]¿Como editar una tarea?
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTask, editTask} from '../features/tasks/taskSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'

function TaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const tasks = useSelector(state => state.tasks)


  const handleChange = e => {
    setTask(
      {
        ...task,
        [e.target.name]: e.target.value,
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
      }))
    }

    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [params, tasks])

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
      <label htmlFor="tittle" className='block text-sx font-bold'>Tarea:</label>
      <input name="title" type="text" placeholder="title" onChange={handleChange} value={task.title} className="w-full p-2 rounded-md bg-zinc-600 mb-2"/>

      <label htmlFor="description" className='block text-sx font-bold mb-2'>Description:
      <textarea name="description" placeholder="description" onChange={handleChange} value={task.description} className="w-full p-2 rounded-md bg-zinc-600 mb-2"></textarea>
      </label>
      <button className='bg-indigo-600 px-2 py-1'>Save</button>
    </form>
  )
}

export default TaskForm;
