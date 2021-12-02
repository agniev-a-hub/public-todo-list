import { TodoAction, TodoPayload } from './todolist.types';

export enum TodoActionTypeNames {
    TODO_POST_ACTION = 'TODO_POST_ACTION',
    TODO_DELETE_ACTION = 'TODO_DELETE_ACTION',
};

export const createTodoItemAction = (todo:TodoPayload):TodoAction => ({
    type: TodoActionTypeNames.TODO_POST_ACTION,
    payload: todo,
});

export const deleteTodoItemAction = (id:string) => ({
    type: TodoActionTypeNames.TODO_DELETE_ACTION,
    payload: id,
});

