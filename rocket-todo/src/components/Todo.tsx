// src/components/Todo.tsx
import React, { useState } from "react";

interface TodoProps {
  todo: Todo;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  editTodo: (index: number, newText: string) => void;
}

interface Todo {
  text: string;
  isCompleted: boolean;
}

const Todo: React.FC<TodoProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="todo-input"
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
      <div className="todo-buttons">
        <button
          onClick={() => completeTodo(index)}
          className="todo-button complete"
        >
          {todo.isCompleted ? "Undo" : "Complete"}
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
