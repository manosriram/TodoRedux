import React, { Fragment, useState, useEffect } from "react";
import "../Styles/App.css";
import { connect } from "react-redux";
import * as actionCreator from "../Store/Actions/actions";

const Todo = props => {
  const updateCurrentTodoFunc = e => {
    props.updateCurrentTodo(e.target.value);
  };

  const addTodo = () => {
    if (props.currentTodo === "") {
      props.setErrorMessage();
    } else {
      props.addTodos(props.currentTodo);
    }
  };

  const deleteTodo = id => {
    props.deleteTodo(id);
  };

  return (
    <div id="todoApp">
      <h2> TODO.JS </h2>
      <br />
      <input
        type="text"
        name="currentTodo"
        value={props.currentTodo}
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
      <h2> {props.errorMessage}</h2>
      <hr />
      <div id="allTodos">
        {props.todos.map((todoItem, todoItemIndex) => {
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

const mapStateToProps = state => {
  return {
    todos: state.todos,
    currentTodo: state.currentTodo,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodos: todo => dispatch(actionCreator.addTodos(todo)),
    updateCurrentTodo: val => dispatch(actionCreator.updateCurrentTodo(val)),
    setErrorMessage: () => dispatch(actionCreator.setErrorMessage()),
    deleteTodo: id => dispatch(actionCreator.deleteTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
