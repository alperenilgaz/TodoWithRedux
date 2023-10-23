import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted } from '../redux/todos/todosSlice'
import { changeActiveFilter,Todosİtem } from '../redux/todos/todosSlice'
function ContentFooter() {
    const item = useSelector(Todosİtem)
    const itemLeft = item.filter(items => !items.completed).length
    const dispatch = useDispatch()
    const activeİtem = useSelector(state => state.todos.activeFilter)
  return (
    <footer className="footer">
    <span className="todo-count">
        <strong>{itemLeft} </strong>       
        item{itemLeft > 1 ?'s':''} left
    </span>

    <ul className="filters">
        <li>
            <a 
            href="#/" 
            className={activeİtem === 'all' ? 'selected':''}
            onClick={() => dispatch(changeActiveFilter('all'))}

            >All</a>
            
        </li>
        <li>
            <a  onClick={() => dispatch(changeActiveFilter('active'))} className={activeİtem === 'active' ? 'selected':''} href="#/">Active</a>
        </li>
        <li>
            <a onClick={() => dispatch(changeActiveFilter('completed'))}  className={activeİtem === 'completed' ? 'selected':''} href="#/">Completed</a>
        </li>
    </ul>

    <button onClick={() => dispatch(clearCompleted())} className="clear-completed">
        Clear completed
    </button>
</footer>
  )
}

export default ContentFooter