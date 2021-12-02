import { TodoList } from "./todolist.types";
import { AnyAction } from "redux";
import { TodoActionTypeNames } from "./todolist.actions";
import { todoCreator } from "./todolist.util";


const initialState:TodoList = {
    todos:[
        {
            id:'test_id',
            header:'test_header',
            content:'test_content'
        }
    ]
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
        default:
            return state;
    }
}