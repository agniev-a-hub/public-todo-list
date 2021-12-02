import { RootState } from "..";
import { createSelector } from "reselect";

const rootTodoSelector = (state:RootState) => state.todo;

export const todosSelector = createSelector(
    rootTodoSelector,
    ({ todos }) => todos
)

export const todosCountSelector = createSelector(
    rootTodoSelector,
    ({ todos }) => todos.length
)