import React from "react";
import './styles.css';
import { Props } from './types';
import Todo from './components/todo';
import Header from './components/table-header';

export const TodoList = ({todos}:Props) => {
    if (todos.length < 1) {
        return (
            <div className="todoListLayout">
                <Header />
                <div className="todoList">
                    <div className='todoListEmpty'>No Active Todo! :D</div>
                </div>
            </div>
        )
    }

    return (
        <div className="todoListLayout">
            <Header />
            <div className="todoList">
                {
                    todos.map((todo) => <Todo key={todo.id} todo={todo} />)
                }
            </div>
        </div>
    )
}