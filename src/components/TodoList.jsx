import { Todo } from "./Todo";
import { useSelector } from "react-redux";

export const TodoList = () => {

  const todos = useSelector(state => state.todos)

  return (
    <div className="list">
      {
        todos.map((todo) => {
          return <Todo
            key={todo.id}
            {...todo} />
        })
      }
    </div>

  )
}