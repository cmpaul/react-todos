import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <a className="delete is-small is-pulled-right" onClick={onDelete} />
      <div className="todo-item-control">
        <label
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <input type="checkbox" checked={todo.completed} onChange={onToggle} />
          {todo.priority} - {todo.text}
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
