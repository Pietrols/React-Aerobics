import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions/todoActions";
import { SHOW_ACTIVE, SHOW_COMPLETED } from "../redux/actions/filterActions";

// TEACHING POINT: Selectors - deriving data from state

function TodoList() {
  const dispatch = useDispatch();

  // Read from multiple slices of state
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  // Selector: Filter todos based on current filter
  const getVisibleTodos = () => {
    switch (filter) {
      case SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      case SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  };

  const visibleTodos = getVisibleTodos();

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
