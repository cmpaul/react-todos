import React from "react";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addNewItem = this.addNewItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addNewItem(text) {
    this.setState(state => ({
      items: state.items.concat({
        isDone: false,
        text: text
      })
    }));
  }

  toggleItem(i) {
    this.setState(state => ({
      items: state.items.map((item, index) => {
        if (index === i) item.isDone = !item.isDone;
        return item;
      })
    }));
  }

  deleteItem(i) {
    this.setState(state => ({
      items: state.items
        .slice(0, i)
        .concat(state.items.slice(i + 1, state.length))
    }));
  }

  render() {
    // Count how many items have been completed
    const itemsDone = this.state.items.reduce(
      (acc, item) => acc + (item.done ? 1 : 0),
      0
    );

    return (
      <div className="todo-list container">
        <TodoHeader items={this.state.items} />
        <TodoForm onSubmit={this.addNewItem} />
        <div>
          {this.state.items.map((item, i) => (
            <TodoItem
              key={i}
              index={i}
              isDone={item.isDone}
              text={item.text}
              onDone={this.toggleItem}
              onDelete={this.deleteItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
