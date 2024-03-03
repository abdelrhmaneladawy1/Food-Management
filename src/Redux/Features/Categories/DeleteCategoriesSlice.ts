import { createSlice } from "@reduxjs/toolkit";
import { deleteCategories } from "../../../Api/Categories/Categories";
const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};

const DeleteCategoriesSlice = createSlice({
  name: "deleteCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default DeleteCategoriesSlice.reducer;
