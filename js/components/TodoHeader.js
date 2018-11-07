import React from "react";

class TodoHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>TODO</h1>
        <span className="tag is-medium">
          {this.props.items.reduce((acc, item) => acc + (item.done ? 1 : 0), 0)}
          /{this.props.items.length}
        </span>
      </div>
    );
  }
}

export default TodoHeader;
