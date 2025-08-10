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
        <input onChange={(e)=>setValue(e.target.value)} value={value} type="text" className='block w-full p-4 mb-2 text-white bg-transparent border border-gray-500 rounded outline-none placeholder:text-gray-300' placeholder='add task name'/>
        <input onChange={(e)=>setDes(e.target.value)} value={des} type="text" className='block w-full p-4 mb-2 text-white bg-transparent border border-gray-500 rounded outline-none placeholder:text-gray-300' placeholder='add task description'/>
        <button className='w-full p-4 text-white bg-gray-500 border-none rounded cursor-pointer'>Add Task</button>
    </form>
  )
}

export default Form
