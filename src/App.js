import React from "react";
import Filter from "./components/Filter";
import ToDoList from "./components/ToDoList";
import { Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "./redux/todoSlice";
import {
  todosSelectorWithFilter,
  filterStatusSelector,
} from "./redux/selectors";
export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(todosSelectorWithFilter);
  const status = useSelector(filterStatusSelector);
  function handleClick() {
    dispatch(todoSlice.actions.removeAll(false));
  }

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>TODO APP</Typography>
      <Filter></Filter>
      {todoList.map((list) => (
        <ToDoList
          key={list.id}
          id={list.id}
          name={list.name}
          completed={list.completed}
        ></ToDoList>
      ))}
      {status === "Completed" ? (
        <Button type="primary" danger onClick={handleClick}>
          Remove All
        </Button>
      ) : null}
    </div>
  );
}
