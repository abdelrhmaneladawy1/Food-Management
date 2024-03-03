import { createSlice } from "@reduxjs/toolkit";
import { addRecipe } from "../../../Api/Recipes/Recipes";
const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};

const AddRecipesSlice = createSlice({
  name: "addRecipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addRecipe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addRecipe.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(addRecipe.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default AddRecipesSlice.reducer;
