import Header from './components/Header'
import AddTasks from './components/AddTasks'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  
const [tasks,setTasks] =useState([
  
])

    const [title, setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [editTitle,setEditTitle]=useState('')
    const [editDescription,setEditDescription]=useState('')
    const [editMode,setEditMode]=useState(false)
    const [form, setForm]=useState(false)
    const [selectedTaskId, setSelectedTaskId] = useState(null);

const handleClick = () => {
      setForm(!form)
  }

const handleEdit = (id) => {
  setSelectedTaskId(id); // Set the clicked task ID for editing
  const selectedTask = tasks.find((task) => task.id === id);
  setEditTitle(selectedTask.title);
  setEditDescription(selectedTask.description);
  setEditMode(!editMode);
}

const handleSaveChanges = (id) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        title: editTitle,
        description: editDescription,
      };
    }
    return task;
  });
  setTasks(updatedTasks);
  setSelectedTaskId(null);
  setEditMode(false);
};

const handleSubmit = (e) => {
  e.preventDefault()
  const newTask={
    id:tasks.length?tasks.length+1:1,
    title,
    description
  }
  setTasks([...tasks,newTask])
  setTitle('')
  setDescription('')

}
const handleDelete=(id)=>{
  const updatedTasks=tasks.filter((task)=>(
    task.id!==id
  ))
  setTasks(updatedTasks)

}
const handleCancelEdit = () => {
  setSelectedTaskId(null); // Clear selected ID on cancel
  setEditMode(false);
};
  return (
   <div className='container mx-auto h-screen flex flex-col bg-blue-50'>
  <Header className='h-1/6'/>
  <div className='h-full flex flex-col'>
  <AddTasks className='h-1/4' handleSubmit={handleSubmit}
                              title={title}
                              setTitle={setTitle}
                              description={description}
                              setDescription={setDescription}
                              handleClick={handleClick}
                              form={form}                        
  />
  <TaskList className='h-3/4' tasks={tasks}
                              setTasks={setTasks}
                              editTitle={editTitle}
                              setEditTitle={setEditTitle}
                              editDescription={editDescription}
                              setEditDescription={setEditDescription}
                              editMode={editMode}
                              setEditMode={setEditMode}
                              handleEdit={handleEdit}
                              handleSaveChanges={handleSaveChanges}
                              handleDelete={handleDelete}
                              selectedTaskId={selectedTaskId}
                              handleCancelEdit={handleCancelEdit}
  />
  </div>
  <Footer className='h-1/6' />

   </div>
  )
}

export default App
