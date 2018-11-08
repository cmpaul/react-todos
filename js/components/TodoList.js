import React from "react";
import { connect } from "react-redux";

import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

import { toggleTodo, deleteTodo } from "../actions";

const TodoList = ({ todos, onToggle, onDelete }) => (
  <div className="todo-list container">
    <TodoHeader todos={todos} />
    <TodoForm />
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  </div>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onToggle: id => {
      dispatch(toggleTodo(id));
    },
    onDelete: id => {
      dispatch(deleteTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
