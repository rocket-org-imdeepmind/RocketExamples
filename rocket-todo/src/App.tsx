// src/App.tsx
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Banner from "./components/Banner";
import { ITodo } from "./types";

import "./App.css";

const API_URL =
  "https://api.rocketapi.net/public/66084edafa3ac2f4a697e4e6/66084ee8fa3ac2f4a697e4ed";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNewTODOs = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}?limit=${50}&page=1`);

      setTodos(res.data.data.docs);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, []);

  const addTodo = useCallback(
    async (task: string) => {
      setLoading(true);
      try {
        const body = {
          task,
          status: "yet-to-start",
          id: (+new Date()).toString(),
          targetTime: new Date().toISOString(),
        };

        await axios.post(`${API_URL}`, body);
        await fetchNewTODOs();
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    },
    [fetchNewTODOs]
  );

  const completeTodo = useCallback(
    async (id: number) => {
      setLoading(true);
      try {
        const todo = todos.find((todo) => todo.id === id.toString());

        if (todo === undefined) return;

        const body = {
          ...todo,
          status: todo.status === "complete" ? "yet-to-start" : "complete",
        };

        await axios.put(`${API_URL}/id/${id}`, body);
        await fetchNewTODOs();
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    },
    [fetchNewTODOs, todos]
  );

  const removeTodo = useCallback(
    async (id: number) => {
      setLoading(true);
      try {
        await axios.delete(`${API_URL}/id/${id}`);
        await fetchNewTODOs();
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    },
    [fetchNewTODOs]
  );

  const editTodo = useCallback(
    async (id: number, text: string) => {
      setLoading(true);
      try {
        const todo = todos.find((todo) => todo.id === id.toString());

        if (todo === undefined) return;

        const body = {
          ...todo,
          task: text,
        };

        await axios.put(`${API_URL}/id/${id}`, body);
        await fetchNewTODOs();
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    },
    [fetchNewTODOs, todos]
  );

  useEffect(() => {
    fetchNewTODOs();
  }, [fetchNewTODOs]);

  return (
    <div className="app">
      <Banner />
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            index={parseInt(todo.id)}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} loading={loading} />
      </div>
    </div>
  );
};

export default App;
