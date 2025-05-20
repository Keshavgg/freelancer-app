"use client";

import React, { useState } from "react";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editTodoIndex, setEditTodoIndex] = useState<number | null>(null);
  const [editTodoText, setEditTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  };

  const handleEditTodo = (index: number) => {
    setEditTodoIndex(index);
    setEditTodoText(todos[index]);
  };

  const handleUpdateTodo = () => {
    if (editTodoText.trim() && editTodoIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editTodoIndex ? editTodoText : todo,
      );
      setTodos(updatedTodos);
      setEditTodoIndex(null);
      setEditTodoText("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="px-4 py-4 bg-[#E0DACF] dark:bg-[#16161a] shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Features List</h1>
      <div className=" flex items-center mb-4 gap-2 ">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full px-2 py-4 rounded-lg   placeholder:text-[#CCC5B9] focus:outline-none dark:placeholder:text-[#94a1b2]"
          placeholder="Add a new feature"
        />
        <button
          type="button"
          onClick={handleAddTodo}
          className="dark:bg-[#7f5af0] bg-[#2cb67d] text-white px-4 py-4 mt-2 mb-2 md:w-[10vw] rounded "
        >
          Add
        </button>
      </div>
      {editTodoIndex !== null && (
        <div className="mb-4">
          <input
            type="text"
            value={editTodoText}
            onChange={(e) => setEditTodoText(e.target.value)}
            className=" rounded px-3 py-2 w-full focus:outline-none bg-zinc-50 dark:bg-[#242629] dark:text-[#FFFCF2] placeholder:text-[#CCC5B9]"
            placeholder="Edit Feature"
          />
          <button
            type="button"
            onClick={handleUpdateTodo}
            className="bg-green-500 text-white px-4 py-2 mt-2 rounded w-full"
          >
            Update
          </button>
        </div>
      )}
      <ul className="flex flex-col gap-2">
        {todos.length === 0 && <li className="text-gray-500">No todos yet</li>}
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center rounded-lg py-2  bg-zinc-50 dark:bg-[#242629] text-[#FFFCF2]"
          >
            <span className=" px-2 text-zinc-700 dark:text-white">{todo}</span>
            <div className="px-2">
              <button
                type="button"
                onClick={() => handleEditTodo(index)}
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteTodo(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
