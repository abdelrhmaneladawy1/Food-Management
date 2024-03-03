import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../../Api/Categories/Categories";
export interface Props {
  categoriesData: any;
  loading: boolean;
  error: null | string;
}

const initialState: Props = {
  categoriesData: [],
  loading: false,
  error: null,
};
const GetCategoriesSlice = createSlice({
  name: "getCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categoriesData = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default GetCategoriesSlice.reducer;
