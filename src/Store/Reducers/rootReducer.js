let initState = {
  todos: [],
  currentTodo: "",
  errorMessage: ""
};

const reducer = (state = initState, action) => {
  if (action.type === "UPDATE_TODO") {
    return {
      ...state,
      currentTodo: action.value
    };
  } else if (action.type === "ADD_TODO") {
    return {
      ...state,
      errorMessage: "",
      currentTodo: "",
      todos: [...state.todos, action.todo]
    };
  } else if (action.type === "ERR_MSG") {
    return {
      ...state,
      errorMessage: action.msg
    };
  } else if (action.type === "DEL_TODO") {
    // Filtering out the Todo's with different IDs.
    const updatedTodo = state.todos.filter((todos, todoIndex) => {
      return todoIndex !== action.id;
    });
    return {
      ...state,
      todos: updatedTodo
    };
  }

  return state;
};

export default reducer;
