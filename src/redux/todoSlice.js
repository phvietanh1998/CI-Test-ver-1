import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: {
    item: [
      { id: "1", name: "Learn Yoga", completed: false },
      { id: "2", name: "Learn redux", completed: true },
      { id: "3", name: "Learn JS", completed: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.item.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const deleteId = state.item.findIndex(
        (item) => item.id === action.payload
      );
      state.splice(deleteId, 1);
    },
    removeAll: (state, action) => {
      state.item = state.item.filter((list) => list.completed === false);
    },
    changeStatus: (state, action) => {
      const index = state.item.findIndex((item) => item.id === action.payload);
      state.item[index].completed = !state.item[index].completed;
    },
  },
});
