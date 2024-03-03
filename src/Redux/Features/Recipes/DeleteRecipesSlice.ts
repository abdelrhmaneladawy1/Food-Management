import { createSlice } from "@reduxjs/toolkit";
import { deleteRecipes } from "../../../Api/Recipes/Recipes";
const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};

const DeleteRecipesSlice = createSlice({
  name: "deleteRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteRecipes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default DeleteRecipesSlice.reducer;
