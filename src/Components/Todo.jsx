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

  const fetchD = e => {
    props.fetchData(e);
  };

  return (
    <div id="todoApp">
      <h2> TODO.JS </h2>
      <button onClick={fetchD} id="fetchD">
        FETCH DATA
      </button>
      <br />
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
      <p> {props.fetchedData.title}</p>
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
    todos: state.One.todos,
    currentTodo: state.One.currentTodo,
    errorMessage: state.One.errorMessage,
    fetchedData: state.Two.fetchedData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodos: todo => dispatch(actionCreator.addTodos(todo)),
    updateCurrentTodo: val => dispatch(actionCreator.updateCurrentTodo(val)),
    setErrorMessage: () => dispatch(actionCreator.setErrorMessage()),
    deleteTodo: id => dispatch(actionCreator.deleteTodo(id)),
    fetchData: e => dispatch(actionCreator.fetchData(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
