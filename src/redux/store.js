import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./todoSlice";
import filtersSlice from "./filtersSlice";
const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
    filters: filtersSlice.reducer,
  },
});
export default store;
