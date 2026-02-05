import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    accordionIndex: 0,
  },
  reducers: {
    setAccordionIndex: (state, action) => {
      state.accordionIndex = action.payload;
    },
  },
});

export const { setAccordionIndex } = uiSlice.actions;
export default uiSlice.reducer;
