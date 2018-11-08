import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const TodoForm = ({ dispatch }) => {
  let input;
  let priorityInput;

  const onSubmit = () => {
    let priorityVal;
    if (priorityInput.value !== "") {
      priorityVal = parseInt(priorityInput.value, 10);
    }
    dispatch(addTodo(input.value, priorityVal));
    input.value = "";
    priorityInput.value = "";
  };

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
            onKeyPress={e => {
              if (e.key !== "Enter") return;
              onSubmit();
            }}
          />
        </div>
        <div className="control">
          <input
            ref={node => {
              priorityInput = node;
            }}
            className="input"
            type="number"
            placeholder="Priority (1)"
          />
        </div>
        <div className="control">
          <a className="button is-info" onClick={() => onSubmit()}>
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect()(TodoForm);
