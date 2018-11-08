import React from "react";

import TodoFilter from "./TodoFilter";

const TodoHeader = ({ todos }) => (
  <div>
    <div className="is-pulled-right">
      <TodoFilter />
    </div>
    <div className="header">
      <h1>TODO</h1>
      <span className="tag is-medium">
        {todos.reduce((acc, { completed }) => acc + (completed ? 1 : 0), 0)}/
        {todos.length}
      </span>
    </div>
  </div>
);

export default TodoHeader;
