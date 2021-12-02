import { TodoItem } from '../../store/todo-list/todolist.types'
import { TodoPayload } from './../../store/todo-list/todolist.types';

export interface MapProps {
    todos: TodoItem[];
}

export interface DispatchProps {
    create: (temp: TodoPayload) => void;
    delete: (id: string) => void;
}

export type Props = MapProps & DispatchProps;