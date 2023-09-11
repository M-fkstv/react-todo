import { useDispatch } from "react-redux";
import { remove } from "../store/todo.slice";
import { toggled } from "../store/todo.slice";


export const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <input type="checkbox" checked={completed} onChange={() => dispatch(toggled({ id }))}/>
      <p>{text}</p>
      <button onClick={() => dispatch(remove({ id }))}>Remove Todo</button>
    </div>
  )
}