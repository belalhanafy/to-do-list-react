import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const Todo = ({ task, delataTodo, editTodo }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`flex items-baseline justify-between ${isChecked ? 'bg-green-700' : 'bg-gray-800'} text-white py-5 px-4 rounded-md mb-4`}>
            <div className='flex items-baseline gap-3'>
                <input 
                    id="green-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer" 
                />
                <div className='flex flex-col items-start'>
                    <p className='text-xl text-white'>{task.task}</p>
                    <p className={`text-lg ${isChecked?"text-black":"text-gray-500"} text-gray-500`}>{task.des}</p>
                </div>
            </div>
            <div className='flex items-center gap-x-4'>
                <CiEdit className='text-2xl' onClick={() => editTodo(task.id)} />
                <CiTrash onClick={() => delataTodo(task.id)} className='text-2xl' />
            </div>
        </div>
    );
}

export default Todo;
