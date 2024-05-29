import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const ToDoList = () => {
  const [toDo, setToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "Task") {
      setInputValue(value);
    }
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setToDo([...toDo, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodo = [...toDo];
    newTodo.splice(index, 1);
    setToDo(newTodo);
  };

  return (
    <div className="container mt-5">
      <div className="w-50  my-auto mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          name="Task"
          placeholder="Add a new task"
          style={{ border: "none", boxShadow: "none" }}
        />
      </div>
      <ul className="ps-0">
        {toDo.map((todo, index) => (
          <li
            key={index}
            className="d-flex justify-content-between align-items-center mb-2"
            style={{
              padding: "5px",
              margin: "0 auto",
            }}
          >
            <p>{todo}</p>
            <button
              className="btn btn-danger "
              onClick={() => handleDeleteTodo(index)}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
