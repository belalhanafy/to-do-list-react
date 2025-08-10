    import React, { useEffect, useRef, useState } from 'react'
    import Form from './Form'
    import { v4 as uuidv4 } from 'uuid';
    import Todo from './Todo';
    import Edit from './Edit'
    import Typed from 'typed.js';
    import { Bounce, toast } from 'react-toastify';

    const TodoList = () => {
        const [searchTerm, setSearchTerm] = useState("");
        const [todoList, setTodoList] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
        const [todoListCopy, setTodoListCopy] = useState(todoList);
        const el = useRef(null);

        useEffect(() => {
            localStorage.setItem("tasks", JSON.stringify(todoList));
        }, [todoList]);

        useEffect(() => {
            const typed = new Typed(el.current, {
                strings: ['To Do List', 'To Manage Your Daily Tasks'],
                typeSpeed: 150,
                backSpeed: 50,
                loop: true,
                smartBackspace: true, // this is a default
                cursorChar: '',
            });

            return () => {
                // Destroy Typed instance during cleanup to stop animation
                typed.destroy();
            };
        }, []);

        const createTodo = (todo, des) => {
            setTodoList([...todoList, { id: uuidv4(), task: todo, des, isEditing: false }])
            setTodoListCopy([...todoList, { id: uuidv4(), task: todo, des, isEditing: false }])
             toast.success('task created successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }

        const delataTodo = todoId => {
            setTodoList(todoList.filter((todo) => todo.id !== todoId))
            toast.success('task deleted successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        const editTodo = (todoId) => {

            //1
            let newList = structuredClone(todoList)
            newList = newList.map((todo) => {
                if (todo.id === todoId) {
                    todo.isEditing = !todo.isEditing
                }
                return todo
            })
            setTodoList(newList)
            setTodoListCopy(newList)




            //2
            // const index = todoList.findIndex(function (todo) {
            //     return todo.id === todoId
            // })
            // todoList[index] = { ...todoList[index], isEditing: !todoList[index].isEditing }
            // setTodoList((oldToDo) => [...oldToDo])


            //3
            // setTodoList(todoList.map((todo) => {
            //     if (todo.id === todoId) {
            //         return { ...todo, isEditing: !todo.isEditing }
            //     }
            //     return todo;
            // }))
        }
        const editTask = (taskName, taskId) => {
            //1
            let newList = structuredClone(todoList)
            newList = newList.map((todo) => {
                if (todo.id === taskId) {
                    todo.task = taskName
                    todo.isEditing = !todo.isEditing
                }
                return todo
            })
            setTodoList(newList)
            setTodoListCopy(newList)


            //2
            // const index = todoList.findIndex(function (todo) {
            //     return todo.id === taskId
            // })
            // todoList[index] = { ...todoList[index], task: taskName, isEditing: !todoList[index].isEditing }
            // setTodoList((oldToDo) => [...oldToDo])

            //3
            // setTodoList(todoList.map((todo) => {
            //     if (todo.id === taskId) {
            //         return { ...todo, task: taskName, isEditing: !todo.isEditing }
            //     }
            //     return todo;
            // }))
            toast.success('task updated successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        const exitEditing = (taskId) => {
            //1
            let newList = structuredClone(todoList)
            newList = newList.map((todo) => {
                if (todo.id === taskId) {
                    todo.isEditing = !todo.isEditing
                }
                return todo
            })
            setTodoList(newList)
            setTodoListCopy(newList)


            //2
            // const index = todoList.findIndex(function (todo) {
            //     return todo.id === taskId
            // })
            // todoList[index] = { ...todoList[index], isEditing: !todoList[index].isEditing }
            // setTodoList((oldToDo) => [...oldToDo])

            //3
            // setTodoList(todoList.map((todo) => {
            //     if (todo.id === taskId) {
            //         return { ...todo, isEditing: !todo.isEditing }
            //     }
            //     return todo;
            // }))
        }
        const handleSearch = (word) =>{
            setTodoList(todoListCopy.filter((todo)=> todo.task.toLowerCase().includes(word.toLowerCase())))
        }
        return (
            <div className='container w-2/4 p-8 mx-auto mt-20 text-center bg-gray-700 rounded-md'>
                <h1 ref={el} className='mb-8 text-4xl tracking-wide text-white' />
                <Form createTodo={createTodo} />
                <input
                    type="search"
                    id="search"
                    className="block w-full p-4 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none placeholder:text-gray-500 bg-gray-50 focus:ring-gray-500 focus:border-gray-500 "
                    placeholder="Search for a Task"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value),handleSearch(e.target.value)}}
                    required
                />
                {
                    
                    todoList?.length > 0 ? (
                        todoList.map((task) => task?.isEditing ? (
                            <Edit key={task.id} editTask={editTask} exitEditing={exitEditing} task={task} />
                        ) : (
                            <Todo task={task} key={task.id} delataTodo={delataTodo} editTodo={editTodo} />
                        ))
                    ) : (
                        <p className='text-2xl text-white'>No tasks available</p>
                    )
                }
                
            </div>

        )
    }

    export default TodoList
