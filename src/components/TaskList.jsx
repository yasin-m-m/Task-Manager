import React from 'react'
import { FaCircleCheck, FaPencil, FaRectangleXmark, FaTrash } from 'react-icons/fa6'

const TaskList = ({tasks, setTasks,editTitle,setEditTitle,editDescription,setEditDescription,editMode,setEditMode,handleEdit,handleSaveChanges,selected,handleDelete,selectedTaskId,handleCancelEdit}) => {

  return (
    <div>
    
    <h2 className='text-center font-bold text-2xl my-5'>Tasks List</h2>
   
  {
    tasks.map((task,index)=>
       (
        <ul key={index} className='flex flex-row justify-between w-full items-center gap-3 py-3 border border-b-black'>

        <li className='w-1/5 h-full text-center font-semibold text-xl'>{index+1}</li>

        {editMode && selectedTaskId === task.id ?(<li className=''><input type='text' value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} className='border border-b-black'/></li>):
        <li className='w-1/5 h-full text-center font-semibold text-xl'>{task.title}</li>}

        {editMode && selectedTaskId === task.id ?(<li className=''><input type='text' value={editDescription} onChange={(e)=>setEditDescription(e.target.value)} className='border border-b-black'/></li>):<li className='w-1/5 h-full text-center font-semibold text-xl'>{task.description}</li>}
        
        <div className='w-2/5 flex flex-row justify-evenly'>

        <li className='h-full text-center font-semibold text-xl text-blue-800 hover:text-blue-500 cursor-pointer' onClick={()=>handleEdit(task.id)}>
        
        {editMode ?(<div className='flex felx-row justify-between gap-3'><FaCircleCheck className= 'text-green-700' onClick={()=>handleSaveChanges(task.id)}/> <FaRectangleXmark onClick={handleCancelEdit} className='text-red-700'/></div>):(<FaPencil />)} 
        </li>

        <li className='h-full text-center font-semibold text-xl  text-red-500 hover:text-red-800 cursor-pointer' onClick={()=>handleDelete(task.id)}><FaTrash /></li>
        </div>
        </ul>
      )
    )
  }
    </div>
  )
}

export default TaskList