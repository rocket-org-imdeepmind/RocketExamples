import React, { useState } from "react";

import { ITodoFormProps } from "../types";

const TodoForm: React.FC<ITodoFormProps> = ({ addTodo, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="todo-button add" disabled={loading}>
        {loading ? "Loading..." : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;
