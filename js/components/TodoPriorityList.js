import React from "react";

const TodoPriorityList = ({ todos }) => {
  // build a map of priority levels => count of todos at that priority
  const priorityMap = todos.reduce((acc, todo) => {
    if (!acc[todo.priority]) acc[todo.priority] = 0;
    acc[todo.priority]++;
    return acc;
  }, {});
  const priorities = Object.keys(priorityMap)
    .map(key => parseInt(key, 10))
    .sort();
  const missingRanges = [];
  for (let i = 0; i < priorities.length - 1; i++) {
    const cur = priorities[i];
    const next = priorities[i + 1];
    const diff = next - cur;
    if (diff === 1) continue;
    missingRanges.push([cur + 1, next - 1]);
  }
  // for each key in the map, render visual element
  return (
    <div>
      {missingRanges.map((range, i) => {
        if (range[0] === range[1]) {
          return <p key={i}>Missing priority {range[0]}</p>;
        }
        return (
          <p key={i}>
            Missing priority {range[0]} through {range[1]}
          </p>
        );
      })}
      <ul>
        {Object.keys(priorityMap).map(key => {
          const value = priorityMap[key];
          if (value < 2) return "";
          return (
            <li key={key}>
              <strong>Priority {key}</strong>: {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoPriorityList;
