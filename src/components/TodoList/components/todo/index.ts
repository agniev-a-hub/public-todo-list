import { Todo } from './todo';
import { connect } from "react-redux";
import { AppDispatch } from '../../../../store/index';
import { deleteTodoItemAction, editTodoItemAction } from '../../../../store/todo-list/todolist.actions';
import { TodoPayload } from '../../../../store/todo-list/todolist.types';
interface DispatchProps {
    onDeleteTodo: (id: string) => void
    edit: (todoPayload: TodoPayload, id: string) => void
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    edit: (todoPayload, id) => {
        dispatch(editTodoItemAction(todoPayload, id))
    },
    onDeleteTodo: (id: string) => {
        dispatch(deleteTodoItemAction(id))
    }
})

export default connect(
    null,
    mapDispatchToProps,
)(Todo)