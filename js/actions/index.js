let nextTodoId = 0;

export const addTodo = (text, priority = 1) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text,
    priority
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};
