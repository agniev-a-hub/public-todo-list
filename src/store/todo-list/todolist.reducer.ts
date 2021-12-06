import { TodoList } from "./todolist.types";
import { AnyAction } from "redux";
import { TodoActionTypeNames } from "./todolist.actions";
import { todoCreator } from "./todolist.util";

 
const initialState:TodoList = {
    todos:[]
}

export const todoReducer = (state=initialState, action:AnyAction):TodoList => {
    switch (action.type) {
        case TodoActionTypeNames.TODO_POST_ACTION: {
            const createdTodo = todoCreator(action.payload);
            const todos = [...state.todos, createdTodo];
            return {
                ...state,
                todos,
            }
        }
        case TodoActionTypeNames.TODO_DELETE_ACTION: {
            const todos = state.todos.filter(({id}) => id !== action.payload)
            return {
                ...state,
                todos,
            }
        }
        case TodoActionTypeNames.TODO_EDIT_ACTION: {
            const { id, todo } = action.payload
            const todos = state.todos.map((stateTodo) => {
                if (stateTodo.id === id) {
                    return {
                        ...todo,
                        id
                    }
                }
                return stateTodo
            })
            return {
                ...state,
                todos
            }
        }
        
        default:
            return state;
    }
}