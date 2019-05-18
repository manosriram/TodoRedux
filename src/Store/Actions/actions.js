export const addTodos = todo => {
  return {
    type: "ADD_TODO",
    todo
  };
};

export const updateCurrentTodo = value => {
  return {
    type: "UPDATE_TODO",
    value
  };
};

export const setErrorMessage = () => {
  return {
    type: "ERR_MSG",
    msg: "Enter Something..Can't be Empty."
  };
};

export const deleteTodo = id => {
  return {
    type: "DEL_TODO",
    id
  };
};

export const fetchData = e => {
  e.persist();
  return async dispatch => {
    try {
      const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
      const res2 = await res1.json();
      dispatch({
        type: "FETCH",
        e: e,
        payload: res2
      });
    } catch (er) {
      console.log(er);
    }
  };
};
