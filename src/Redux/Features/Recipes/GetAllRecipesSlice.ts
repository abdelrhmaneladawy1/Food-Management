import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "../../../Api/Recipes/Recipes";
export interface Props {
  recipesData: any;
  loading: boolean;
  error: null | string;
}

const initialState: Props = {
  recipesData: [],
  loading: false,
  error: null,
};
const GetAllRecipesSlice = createSlice({
  name: "getRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.recipesData = action.payload;
    });
    builder.addCase(getRecipes.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default GetAllRecipesSlice.reducer;
