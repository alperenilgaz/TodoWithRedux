import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
  const [title, settitle] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({id: nanoid() ,title,completed:false}))
    settitle(" ")
  }
  const dispatch = useDispatch()
  return (
    <form onSubmit={handleSubmit}>
    <input value={title} onChange={(e) => settitle(e.target.value)} className="new-todo" placeholder="What needs to be done?" autoFocus />
</form>
  )
}

export default Form