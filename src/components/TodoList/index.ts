import { TodoPayload } from './../../store/todo-list/todolist.types';
import { AppDispatch } from '../../store/index'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { todosSelector } from '../../store/todo-list/todolist.selectors'
import { deleteTodoItemAction, createTodoItemAction } from '../../store/todo-list/todolist.actions'
import { TodoList } from './todo-list'

const mapStateToProps = createStructuredSelector({
    todos: todosSelector,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    create: (todoPayload: TodoPayload) => {
        dispatch(createTodoItemAction(todoPayload))
    },
    delete: (id: string) => {
        dispatch(deleteTodoItemAction(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)