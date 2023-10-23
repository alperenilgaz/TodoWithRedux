import React from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux/es/hooks/useSelector'
import { toogle,destroy,TodosFilter } from '../redux/todos/todosSlice'

function TodoList() {
    const dispatch = useDispatch()
    const filteredItems = useSelector(TodosFilter)
    
  const handleDestroy = (id) => {
    if(window.confirm('are you sure')) {
      dispatch(destroy({id}))
    }
  }
  
  return (
    
		<ul className="todo-list">
        {/* <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy"></button>
            </div>
        </li> */}
     
      {filteredItems.map(todos => (
           <li className={todos.completed ? 'completed': ''} key={todos.id}>
           <div className="view">
               <input  className="toggle" type="checkbox" onChange={() => dispatch(toogle({id:todos.id}))}/>
               <label>{todos.title}</label>
               <button onClick={() => handleDestroy(todos.id)} className="destroy"></button>
           </div>
       </li>
      ))}
    </ul>
  )
}

export default TodoList