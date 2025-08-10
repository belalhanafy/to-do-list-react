import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";

const Edit = ({ editTask, task, exitEditing }) => {
  const [value, setValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault()
    editTask(value, task.id)
    setValue('')
  }
  return (
    <>
      <div className='flex items-baseline justify-center w-full '>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setValue(e.target.value)} value={value} type="text" className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='whta task do you have today?' />
          <button className='p-4 ml-2 text-white bg-gray-500 border-none rounded cursor-pointer'>Edit Task</button>
          <button onClick={() => exitEditing(task.id)} className='p-4 ml-2 text-white bg-red-500 border-none rounded cursor-pointer'><FaXmark /></button>
        </form>
      </div>
    </>
  )
}

export default Edit
