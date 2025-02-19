import React, { useState } from 'react'

const Form = ({createTodo}) => {
    const [value, setValue] = useState('');
    const [des, setDes] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        createTodo(value,des)
        setValue('')
        setDes('')
    }
  return (
    <form onSubmit={handleSubmit} className='w-full mb-8'>
        <input onChange={(e)=>setValue(e.target.value)} value={value} type="text" className='block w-full outline-none bg-transparent border border-gray-500 p-4 text-white mb-2 rounded placeholder:text-gray-300' placeholder='add task name'/>
        <input onChange={(e)=>setDes(e.target.value)} value={des} type="text" className='block w-full outline-none bg-transparent border border-gray-500 p-4 text-white mb-2 rounded placeholder:text-gray-300' placeholder='add task description'/>
        <button className='bg-gray-500 border-none p-4 text-white cursor-pointer rounded w-full'>Add Task</button>
    </form>
  )
}

export default Form
