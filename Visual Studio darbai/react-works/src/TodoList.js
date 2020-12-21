import React from 'react'


const TodoList = ({ index, task }) => {

    console.log(task)

    return (
        <tr className='row'>
            <td>{index + 1}</td>
            <td>{task.text}</td>
            <td>{task.isCompleted ? 'Done' : 'In progress'}</td>
        </tr>
    )
}

export default TodoList
