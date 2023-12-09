import React from 'react'

import { useSelector } from 'react-redux'

export default function Todo () {
    const todos = useSelector(state => (state.todos));
    console.log(todos)
    return (
        <>
        <div>
            Todo
        </div>
        
            {todos.map((todo) => (
                <div key={todo.id}>{todo.text}</div>
            ))}
        
        </>
    )
}