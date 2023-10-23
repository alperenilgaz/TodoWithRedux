import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name:'todos',
    initialState : {
        items:[
            {
                id:1,
                title:'Hİ',
                completed:false

            },
            {
                id:2,
                title:'There',
                completed:false
                
            }
        ],
        activeFilter:'all'

    },
    reducers:{
        addTodo : ((state,action) => {
            state.items.push(action.payload)
        }),
        toogle:((state,action) => {
            const {id} = action.payload
            const item  = state.items.find(item => item.id === id)
            item.completed = !item.completed
        }),
        destroy:((state,action) => {
            const {id} = action.payload
            const filtered = state.items.filter((item) => item.id !== id)
            state.items=filtered
            console.log("22");
        }),
        changeActiveFilter:((state,action) => {
            state.activeFilter = action.payload
        }),
        clearCompleted:(state => {
            const filtered = state.items.filter(item => item.completed !== true)
            state.items = filtered
        })
        
    },
})
export default todosSlice.reducer
export const {addTodo,toogle,clearCompleted,destroy,changeActiveFilter} = todosSlice.actions
export const Todosİtem = ((state) => state.todos.items)
export const TodosFilter = (state) => {
    if(state.todos.activeFilter === 'all') {
        return state.todos.items
    }
    return state.todos.items.filter((todo)  => 
        state.todos.activeFilter === 'active' ? todo.completed === false : todo.completed===true
    )
}

   
  