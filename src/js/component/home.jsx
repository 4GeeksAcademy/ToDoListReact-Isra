import React from "react";
import ToDoList from "./ToDoList";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mt-4">To Do List</h1>
      <ToDoList />
    </div>
  );
};

export default Home;
