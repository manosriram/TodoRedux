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
