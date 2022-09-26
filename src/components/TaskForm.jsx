import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext';


function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({title, description})
        setTitle('')
        setDescription('')
        
    }
   

  return (
    <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 mb-4 p-10'>
                <h1 className='text-2xl font-bold text-white p-2'>Crea Tu Tarea</h1>
                <input 
                placeholder="Escribe tu tarea" 
                onChange={(e) => 
                    setTitle(e.target.value)
                    }
                value={title}
                className='bg-slate-300 p-3 w-full mb-2'
                autoFocus/>
                <textarea
                className='bg-slate-300 p-3 w-full mb-2' 
                placeholder='Escribe una descripcion'
                onChange={(f) => 
                    setDescription(f.target.value)}
                value={description}></textarea>
                <button className='bg-violet-600 p-2 rounded-md text-white hover:bg-indigo-400'>
                    guardar
                </button>
            </form>
    </div>

  )
}

export default TaskForm