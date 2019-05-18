let initState = {
  fetchedData: {}
};

const reducerTwo = (state = initState, action) => {
  if (action.type === "FETCH") {
    return {
      ...state,
      fetchedData: action.payload
    };
  }

  return state;
};

export default reducerTwo;
