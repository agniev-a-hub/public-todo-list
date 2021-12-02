import { TodoActionTypeNames } from './todolist.actions';

interface TodoItem {
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

export interface TodoPayload {
    header: string;
    content: string;
}

export type TodoAction = TodoPostType | TodoDeleteType

