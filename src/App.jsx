import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

//imp y rfce
function App() {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto py-4'>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
    
  )
}

export default App
