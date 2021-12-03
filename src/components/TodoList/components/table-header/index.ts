import { Header } from './header';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { todosCountSelector } from '../../../../store/todo-list/todolist.selectors';
import { TodoPayload } from '../../../../store/todo-list/todolist.types';
import { AppDispatch } from '../../../../store/index';
import { createTodoItemAction } from '../../../../store/todo-list/todolist.actions';

const mapStateToProps = createStructuredSelector({
    count: todosCountSelector,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    create: (todoPayload: TodoPayload) => {
        dispatch(createTodoItemAction(todoPayload))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)