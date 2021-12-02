import { todoReducer } from './todo-list/todolist.reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});


//Root State and Dispatch types I'd prefer to store here for now.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

