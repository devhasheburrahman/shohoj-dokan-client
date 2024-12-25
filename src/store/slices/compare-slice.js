import { createSlice } from "@reduxjs/toolkit";
import toast  from "react-hot-toast";


const compareSlice = createSlice({
  name: "compare",
  initialState: {
    compareItems: [],
  },
  reducers: {
    addToCompare(state, action) {
      state.compareItems.push(action.payload);
      toast.success("Added To compare", { position: "bottom-left" });
    },
    deleteFromCompare(state, action) {
      state.compareItems = state.compareItems.filter(
        (item) => item.id !== action.payload
      );
      toast.error("Removed From Compare", { position: "bottom-left" });
    },
  },
});

export const { addToCompare, deleteFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
