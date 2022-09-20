// function taskList() {
//   return (
//     <div>TaskList</div>
//   )
// }

// export default taskList
//------------------------------------------------------------------
// [List & Create]
// import {useSelector} from 'react-redux'

// function TasksList() {

//   const tasks = useSelector(state => state.tasks)
//   console.log(tasks)

//   return (
//     <div>
//       {tasks.map(task => (
//         <div key={task.id}>
//           <h3>{task.title}</h3>
//           <p>{task.description}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default TasksList
//-----------------------------------------------------------------------
//[Delete]
// import {useSelector, useDispatch} from 'react-redux'
// import {deleteTask} from '../features/tasks/taskSlice'

// function TasksList() {

//   const tasks = useSelector(state => state.tasks)

//   const dispatch = useDispatch()

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id))
//   }

//   return (
//     <div>
//       {tasks.map(task => (
//         <div key={task.id}>
//           <h3>{task.title}</h3>
//           <p>{task.description}</p>
//           <button onClick={() => handleDelete(task.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default TasksList
//-----------------------------------------------------------------------
//[React-router-dom@6]
// import {useSelector, useDispatch} from 'react-redux'
// import {deleteTask} from '../features/tasks/taskSlice'
// import {Link} from 'react-router-dom'/* Vendria a ser un enlance desde react router */

// function TasksList() {

//   const tasks = useSelector(state => state.tasks)

//   const dispatch = useDispatch()

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id))
//   }

//   return (
//     <div>

//       <header>
//         <h1>Total de tareas: {tasks.length}</h1>
//         <Link to='/create-task'>Create Task</Link>
//       </header>
//       {tasks.map(task => (
//         <div key={task.id}>
//           <h3>{task.title}</h3>
//           <p>{task.description}</p>
//           <button onClick={() => handleDelete(task.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default TasksList
//-----------------------------------------------------------------------
//[Update]¿Como editar una tarea?
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom"; /* Vendria a ser un enlance desde react router */

function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between item-center py-4">
        <h1>Total de tareas: {tasks.length}</h1>
        <Link to='/create-task' className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <Link to={`/edit-task/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit</Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
//-----------------------------------------------------------------------
