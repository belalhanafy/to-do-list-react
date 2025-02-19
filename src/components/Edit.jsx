import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";

const Edit = ({editTask,task,exitEditing}) => {
    const [value, setValue] = useState(task.task);

    function handleSubmit(e) {
        e.preventDefault()
        editTask(value,task.id)
        setValue('')
    }
  return (
    <>
    <div className=' flex items-baseline w-full justify-center'>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setValue(e.target.value)} value={value} type="text" className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='whta task do you have today?'/>
            <button className='bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2'>Edit Task</button>
        </form>
        <button onClick={()=>exitEditing(task.id)} className='bg-red-500 border-none p-4 text-white cursor-pointer rounded ml-2'><FaXmark /></button>
    </div>
    </>
  )
}

export default Edit
