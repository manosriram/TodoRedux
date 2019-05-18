import React, { Fragment, useState } from "react";
import "../Styles/App.css";

const Todo = () => {
  const [todos, addTodos] = useState([]);
  const [currentTodo, updateCurrentTodo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateCurrentTodoFunc = e => {
    updateCurrentTodo(e.target.value);
  };

  const addTodo = () => {
    if (currentTodo === "") {
      setErrorMessage("Enter Something.");
    } else {
      setErrorMessage("");
      addTodos([...todos, currentTodo]);
      updateCurrentTodo("");
    }
  };

  const deleteTodo = id => {
    const updatedTodo = todos.filter((todos, todoIndex) => {
      return todoIndex !== id;
    });
    addTodos(updatedTodo);
  };

  return (
    <div id="todoApp">
      <h2> TODO.JS </h2>
      <br />
      <input
        type="text"
        name="currentTodo"
        value={currentTodo}
        placeholder="Todo Text"
        onChange={updateCurrentTodoFunc}
      />
      <br />
      <br />
      <button onClick={addTodo} id="addTodo">
        Add Todo
      </button>
      <br />
      <br />
      <h2> {errorMessage}</h2>
      <hr />
      <div id="allTodos">
        {todos.map((todoItem, todoItemIndex) => {
          return (
            <Fragment key={todoItemIndex}>
              <h2>
                {todoItemIndex + 1} - {todoItem}
                <br />
                <button
                  onClick={() => deleteTodo(todoItemIndex)}
                  id="deleteButton"
                >
                  Delete Todo
                </button>
              </h2>
              <hr />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
