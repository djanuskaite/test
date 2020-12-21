import React, { useState } from 'react'
import TodoList from './TodoList'
import NewTask from './NewTask'


const Todo = () => {

    const [tasks, setTask] = useState([
        {
            text: "Clean your room",
            isCompleted: false
        },
        {
            text: "To go to cinema",
            isCompleted: true
        }
    ])
    // ... - pasidarome kopija, esamu reiksmiu. jeigu be kopijos - [{ text }], tai iveda tik paskutine ivesta reiksme, pries tai buvusios dingsta
    const addNewTask = (text) => {
        let newrow = [...tasks, { text }]
        setTask(newrow)
    }

    return (
        <div className='container mt-5'>
            <div className='table'>
                {tasks.map((task, index) => (
                    <TodoList
                        key={index}
                        index={index}
                        task={task} />
                ))}
            </div>
            <NewTask addNewTask={addNewTask} />
        </div>
    )
}

export default Todo
