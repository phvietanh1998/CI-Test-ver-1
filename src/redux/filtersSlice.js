import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    status: "All",
  },
  reducers: {
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
  },
});
