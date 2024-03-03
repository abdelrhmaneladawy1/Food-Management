import { createSlice } from "@reduxjs/toolkit";
import { updateCategories } from "../../../Api/Categories/Categories";
const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};

const UpdateCategoriesSlice = createSlice({
  name: "updateCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(updateCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default UpdateCategoriesSlice.reducer;
