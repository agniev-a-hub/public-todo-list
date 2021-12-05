import React from "react";
import './styles.css';
import TodoList from "./components/TodoList/";
import  {WebsiteHeader}  from "./components/WebsiteHeader/";
import { headerContent } from "./components/WebsiteHeader";

const App = () => {
    return(
        <div className='App'>
            <WebsiteHeader headerContent = {headerContent}/>
            <TodoList/>
        </div>
    )
}
export default App;