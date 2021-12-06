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
    content: "",
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
            <div className='headName'> My TODO List: </div>
            <div className="headerCount"> Current TODO count: {count}</div>
            <div className="createSection">
                <div className='createSectionInput'>
                    <Input className="inputRow" name="header" handler={onChange} value={todo.header} displayName='Header'/>
                    <Input className="inputRow" name="content" handler={onChange} value={todo.content} displayName='Content'/>
                </div>
                <div className="inputRowSubmit">
                    <button className='inputRowSubmitButton' onClick={addTodo} >Add Todo</button>
                </div>
            </div>
        </div>
    )
}