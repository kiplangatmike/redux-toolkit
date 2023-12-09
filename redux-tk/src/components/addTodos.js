import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

export default function AddTodos() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(addTodo(input));
      setInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={input}
            onChange={(e) => 
                setInput(e.target.value)}
            />
        <button type="submit">submit</button>
        <p></p>
      </form>
    )
}