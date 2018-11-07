import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ newTodo: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  }

  render() {
    return (
      <div className="level">
        <form style={{ width: "100%" }} onSubmit={this.onSubmit}>
          <div className="field has-addons">
            <div className="control" style={{ width: "100%" }}>
              <input
                className="input"
                type="text"
                placeholder="What needs to be done?"
                onChange={this.onChange}
                value={this.state.newTodo}
              />
            </div>
            <div className="control">
              <a className="button is-info" onClick={this.onSubmit}>
                Add
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
