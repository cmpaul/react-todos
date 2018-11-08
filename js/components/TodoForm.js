import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const TodoForm = ({ dispatch }) => {
  let input;

  return (
    <div className="level">
      <div className="field has-addons" style={{ width: "100%" }}>
        <div className="control" style={{ width: "100%" }}>
          <input
            ref={node => {
              input = node;
            }}
            className="input"
            type="text"
            placeholder="What needs to be done?"
          />
        </div>
        <div className="control">
          <a
            className="button is-info"
            onClick={() => {
              dispatch(addTodo(input.value));
              input.value = "";
            }}
          >
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect()(TodoForm);
