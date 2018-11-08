import React from "react";

import TodoFilter from "./TodoFilter";

class TodoHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="is-pulled-right">
          <TodoFilter />
        </div>
        <div className="header">
          <h1>TODO</h1>
          <span className="tag is-medium">
            {this.props.items.reduce(
              (acc, item) => acc + (item.isDone ? 1 : 0),
              0
            )}
            /{this.props.items.length}
          </span>
        </div>
      </div>
    );
  }
}

export default TodoHeader;
