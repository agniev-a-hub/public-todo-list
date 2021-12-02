import React,{useState} from "react";
import './todo.css';
import { TodoItem } from '../../../../store/todo-list/todolist.types'
import { Input } from '../input-row'
import { useTodoChange } from '../../hooks/useTodoChange'
import { TodoPayload } from '../../../../store/todo-list/todolist.types'
interface Props {
    todo: TodoItem,
    onDeleteTodo: (id: string) => void,
    edit:(todo:TodoPayload,id:string)=> void
}

export const Todo = ({ todo: { content, header, id }, onDeleteTodo, edit }: Props) => {
    const { todo, onChange } = useTodoChange({
        content, header
    })
    const [isEditing, setIsEditing] = useState(false)
    const onDelete = () => onDeleteTodo(id)
    const onEdit = () => setIsEditing(!isEditing)
    const onSubmit = () => {
        edit(todo, id)
        setIsEditing(false)
    }
    if (isEditing) {
        return <div className="todo">
                    <Input className="inputRow" name="header" handler={onChange} value={todo.header} />
                    <Input className="inputRow" name="content" handler={onChange} value={todo.content} />
                    <div className="buttonRow">
                        <button className="button" onClick={onSubmit}> Submit changes</button>
                    </div>
                </div>
    }
    return(
        <div className="todo">
            <p className="todoRow">{header}</p>
            <p className="todoRow"> {content}</p>
            <div className="buttonRow">
                <button className="button" onClick={onDelete}> Delete todo</button>
                <button className="button" onClick={onEdit}> Edit</button>
            </div>
        </div>
    )
}