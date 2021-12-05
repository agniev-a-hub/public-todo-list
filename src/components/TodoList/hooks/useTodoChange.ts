import { useState, FormEvent } from "react";
import { TodoPayload } from '../../../store/todo-list/todolist.types'

export const useTodoChange = (todoInitState: TodoPayload) => {
    const [todo, setTodo] = useState<TodoPayload>(todoInitState)
    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setTodo({
            ...todo,
            [name]: value
        })
    }
    return {
        todo, onChange, setTodo
    }
}

