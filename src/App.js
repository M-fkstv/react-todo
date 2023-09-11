import './App.css';

import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./store/todo.slice";


function App() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add({ text }));
    setText('');

  }

  return (
    <div className="app">
      <Form setText={setText} text={text} handleSubmit={handleSubmit}/>
      <TodoList/>
    </div>
  )
}

export default App;
