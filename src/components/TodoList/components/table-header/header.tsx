import './header.css';
import { TodoPayload } from '../../../../store/todo-list/todolist.types';
import { Input } from '../input-row';
import { useTodoChange } from '../../hooks/useTodoChange';

interface Props {
    count: number
    create:(todo:TodoPayload)=>void
}

const todoInitState = {
    header: "",
    content:""
}

export const Header = ({ count, create }: Props) => {
    const {todo,onChange,setTodo} = useTodoChange(todoInitState)

    const addTodo = () => {
        if (todo.header && todo.content) {
            create(todo)
            setTodo(todoInitState)
        }
    }
    return(
        <div className="header">
            <span> Current todo count: {count}</span>
            <div className="createSection">
                <Input className="inputRow" name="header" handler={onChange} value={todo.header} />
                <Input className="inputRow" name="content" handler={onChange} value={todo.content} />
                <div className="inputRow">
                    <button onClick={addTodo} >Add Todo</button>
                </div>
            </div>
        </div>
    )
}