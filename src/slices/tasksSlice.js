import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    tasksList:[],
    
}

const taskSlice=createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{
        add:(state,action)=>{
            const id=state.tasksList.length?state.tasksList.length+1:1
            let task={...action.payload,id}
            state.tasksList.push(task)
        },
        remove:(state,action)=>{
            state.tasksList=state.tasksList.filter((task)=>task.id !== action.payload)
        },
        update:(state,action)=>{
            state.tasksList=state.tasksList.map((task)=>task.id===action.payload.id ?action.payload:task)
        },
        
    }
})

export const {add, remove, update}= taskSlice.actions

export default taskSlice.reducer