import React, { useState } from "react";

import { ITodoProps } from "../types";

const Todo: React.FC<ITodoProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo ${todo.status === "complete" ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="todo-input"
        />
      ) : (
        <span className="todo-text">{todo.task}</span>
      )}
      <div className="todo-buttons">
        <button
          onClick={() => completeTodo(index)}
          className="todo-button complete"
        >
          {todo.status === "complete" ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => removeTodo(index)}
          className="todo-button delete"
        >
          Delete
        </button>
        {isEditing ? (
          <button onClick={handleSave} className="todo-button save">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="todo-button edit">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
