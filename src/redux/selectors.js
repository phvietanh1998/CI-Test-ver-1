import { createSelector } from "@reduxjs/toolkit";

export const ToDoListSelector = (state) => state.todoList.item;

export const filterStatusSelector = (state) => state.filters.status;

export const todosSelectorWithFilter = createSelector(
  ToDoListSelector,
  filterStatusSelector,
  (todoList, status) => {
    return todoList.filter((list) => {
      if (status === "All") return true;
      else if (status === "Completed") return list.completed === true;
      else {
        return list.completed === false;
      }
    });
  }
);
