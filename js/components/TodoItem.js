import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <a className="delete is-small is-pulled-right" onClick={onDelete} />
      <div className="todo-item-control">
        <label
          style={{
            textDecoration: todo.completed ? "line-through" : "none"
          }}
          onClick={onToggle}
        >
          <input
            type="checkbox"
            defaultChecked={todo.completed} // TODO: Do we still need this?
          />
          {todo.text}
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
