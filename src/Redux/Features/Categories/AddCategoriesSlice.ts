import { createSlice } from "@reduxjs/toolkit";
import { addCategories } from "../../../Api/Categories/Categories";
const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};

const AddCategoriesSlice = createSlice({
  name: "addCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(addCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default AddCategoriesSlice.reducer;
