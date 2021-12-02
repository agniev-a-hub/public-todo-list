import { TodoActionTypeNames } from './todolist.actions';

export interface TodoItem {
    id: string;
    header: string;
    content: string;
}

export interface TodoList {
    todos: TodoItem[];
}

interface TodoPostType {
    type: TodoActionTypeNames.TODO_POST_ACTION;
    payload: {header: string, content: string};
}

interface TodoDeleteType {
    type: TodoActionTypeNames.TODO_DELETE_ACTION;
    payload: string;
}

interface TodoEditType {
    type: TodoActionTypeNames.TODO_EDIT_ACTION;
    payload: {
        todo:TodoPayload, 
        id:string
    };
}

export interface TodoPayload {
    header: string;
    content: string;
}

export type TodoAction = TodoPostType | TodoDeleteType | TodoEditType

