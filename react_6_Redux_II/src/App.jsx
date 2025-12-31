import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {
  setFilter,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from "./redux/actions/filterActions";

function App() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  return (
    <div>
      <h1>Todo App</h1>

      <AddTodo />

      <div>
        <button
          disabled={currentFilter === SHOW_ALL}
          onClick={() => dispatch(setFilter(SHOW_ALL))}
        >
          All
        </button>
        <button
          disabled={currentFilter === SHOW_ACTIVE}
          onClick={() => dispatch(setFilter(SHOW_ACTIVE))}
        >
          Active
        </button>
        <button
          disabled={currentFilter === SHOW_COMPLETED}
          onClick={() => dispatch(setFilter(SHOW_COMPLETED))}
        >
          Completed
        </button>
      </div>

      <TodoList />
    </div>
  );
}

export default App;
