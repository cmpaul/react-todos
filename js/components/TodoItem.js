import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    // Need state management for "controlled" form element
    // (would rather have a single source of truth for this...)
    this.state = {
      isDone: props.isDone
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange() {
    this.setState({ isDone: !this.state.isDone });
    this.props.onDone(parseInt(this.props.index, 10));
  }

  onClick(e) {
    // e.preventDefault();
    this.props.onDelete(parseInt(this.props.index, 10));
  }

  render() {
    return (
      <div className="todo-item">
        <a className="delete is-small is-pulled-right" onClick={this.onClick} />
        <div className="todo-item-control">
          <input
            id={`item-${this.props.index}`}
            type="checkbox"
            checked={this.state.isDone}
            onChange={this.onChange}
          />
          <label
            htmlFor={`item-${this.props.index}`}
            className={this.state.isDone ? " done" : ""}
          >
            {this.props.text}
          </label>
        </div>
      </div>
    );
  }
}

export default TodoItem;
